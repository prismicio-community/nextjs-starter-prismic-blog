const http = require("http");
const { spawn } = require("child_process");

Promise.all([
  startProcessAndCheckAccess({
    command: "npm",
    commandArgs: ["run", "slice-machine"],
    url: "http://localhost:9999",
  }),
  startProcessAndCheckAccess({
    command: "npm",
    commandArgs: ["run", "next:dev"],
    url: "http://localhost:3000",
  }),
]).then((res) => {
  console.log(`Slice Machine is accessible: ${res[0]}`);
  console.log(`App development environment is accessible: ${res[1]}`);

  if (res.every((ok) => ok === true)) {
    console.log(`PASSED`);
    process.exit(0);
  } else {
    console.log(`FAILED`);
    process.exit(1);
  }
});

function startProcessAndCheckAccess({
  command,
  commandArgs,
  url,
  maxAttempts = 3,
  checkInterval = 1000,
}) {
  const child = spawn(command, commandArgs);

  return new Promise((resolve, reject) => {
    let attempts = 0;

    const checker = setInterval(() => {
      attempts++;

      if (attempts > maxAttempts) {
        clearInterval(checker);
        reject();
      }

      http
        .get(url, (res) => {
          if (res.statusCode >= 200 && res.statusCode < 300) {
            ok = true;
            clearInterval(checker);
            resolve();
          }
        })
        .on("error", () => {
          // noop
        });
    }, checkInterval);
  })
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    })
    .finally(() => {
      child.kill();
    });
}
