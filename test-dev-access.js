// NOTE: This file will be removed automatically after creating a new project
// using this starter.
//
// This file is only used to test the starter between dependency upgrades.

const { get } = require("http");
const { spawn } = require("child_process");

const child = spawn("npm", ["run", "dev"]);

Promise.all([
  checkAccess("http://localhost:9999"),
  checkAccess("http://localhost:3000"),
]).then((res) => {
  child.kill();

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
    console.error(`FAILED`);
    process.exit(1);
  }
});

/**
 * Checks for access to a given URL at a set interval.
 */
async function checkAccess(
  url,
  { maxAttempts = 10, checkInterval = 1000 } = {}
) {
  let attempts = 0;

  try {
    await new Promise((resolve, reject) => {
      const checker = setInterval(() => {
        attempts++;

        if (attempts >= maxAttempts) {
          clearInterval(checker);
          reject();
        }

        get(url, (res) => {
          if (res.statusCode >= 200 && res.statusCode < 300) {
            clearInterval(checker);
            resolve();
          }
        }).on("error", () => {
          // noop
        });
      }, checkInterval);
    });

    return { ok: true, attempts };
  } catch {
    return { ok: false, attempts };
  }
}
