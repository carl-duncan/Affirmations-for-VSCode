// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	request();
	let disposable = vscode.commands.registerCommand('affirmations.helloWorld', function () {
	request();
	
	});

	context.subscriptions.push(disposable);
}


exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

async function request(){
	const Http = new XMLHttpRequest();
	const url='https://www.affirmations.dev/';
	// @ts-ignore
	Http.open("GET", url);
	// @ts-ignore
	Http.send();
	
	Http.onreadystatechange = (e) => {
		console.log(Http.responseText);
		vscode.window.showInformationMessage(Http.responseText);
	}
}

module.exports = {
	activate,
	deactivate
}
