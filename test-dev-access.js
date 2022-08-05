const http = require("http");
const { spawn } = require("child_process");

Promise.all([
  startProcessAndCheckAccess({
    command: "npm",
    commandArgs: ["run", "slicemachine"],
    url: "http://localhost:9999",
  }),
  startProcessAndCheckAccess({
    command: "npm",
    commandArgs: ["run", "next:dev"],
    url: "http://localhost:3000",
  }),
]).then((res) => {
  console.log(
    `Slice Machine is accessible: ${res[0].ok} (attempts: ${res[0].attempts})`
  );
  console.log(
    `App development environment is accessible: ${res[1].ok} (attempts: ${res[1].attempts})`
  );

  if (res.every((r) => r.ok === true)) {
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
  maxAttempts = 10,
  checkInterval = 1000,
}) {
  const child = spawn(command, commandArgs);

  let attempts = 0;

  return new Promise((resolve, reject) => {
    const checker = setInterval(() => {
      attempts++;

      if (attempts >= maxAttempts) {
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
      return {
        ok: true,
        attempts,
      };
    })
    .catch(() => {
      return {
        ok: false,
        attempts,
      };
    })
    .finally(() => {
      child.kill();
    });
}
