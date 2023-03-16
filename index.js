import * as core from "@actions/core"

/**
 * Exits the current process with an error code and message
 */
const exit = (msg) => {
	console.error(msg);
	process.exit(1);
};

/**
 * Executes the provided shell command and redirects stdout/stderr to the console
 */
const run = (cmd, cwd) => execSync(cmd, { encoding: "utf8", stdio: "inherit", cwd });

/**
 * Installs NPM dependencies and builds/releases the Electron app
 */
const runAction = () => {
	const var1 = core.getInput("var1")
	const var2 = core.getInput("var2")
	const var3 = core.getInput("var3")
};

runAction();
