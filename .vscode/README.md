# `.vscode` folder

The `.vscode` folder holds the VSCode-specific project files. Typically, the `.vscode` folder and all files under it should be excluded from the source control, but we need to include two important files: `settings.json` and `http.code-snippets` (as explained in the [main README file](../#gitignore-file-file)).

## [`settings.json` file](settings.json)

The `settings.json` file under the `.vscode` folder defines project-specific settings for both VSCode and httpYac including the default environment that will be loaded on the IDE project start (`httpyac.environmentSelectedOnStart`), border decoration of the test regions, response output layout, tab settings, and more.

## [`http.code-snippets` file](http.code-snippets)

The `http.code-snippets` file under the `.vscode` folder defines the code snippets that will show up when you enter `#` (or `# @`, or `###`) and press the `CTRL+SPACE` keys in an open `.http` file. The code snippets will make it easier to write code for test regions, assertions, and other operations. Since this is a project-specific file, you can adjust the snippets for your specific test scenarios and project coding conventions. For more information about code snippets, see [Snippets in Visual Studio Code](https://code.visualstudio.com/docs/editor/userdefinedsnippets).
