# httpyac-extras

This repo illustrates how to use [httpYac](https://httpyac.github.io/) for REST API ad-hoc testing and test automation. It defines a sample project structure and environment configuration that you can adjust and/or extend for your specific testing needs.

## Overview

This document describes the project structure and explains the purpose of the project files and folders. For additional information, check:

- [SAMPLES](SAMPLES.md>)
- [TIPS](TIPS.md)
- [FAQs](FAQs.md)

## Project structure

The following files and folders are important for the project.

### [`.gitignore` file](.gitignore) file

The important modifications to the `.gitignore` file include:

- Inclusion of the VSCoce code snippets and settings files that would typically be ignored along with the contents of the `.vscode` folder that holds them.
- Exclusion of the private environment variable file intended for keeping sensitive settings (client secrets, passwords, etc.):

```text
.vscode/*
!.vscode/settings.json
!.vscode/*.code-snippets
*.private.env.json
```

### [`.httpyac.config.js` file](.httpyac.config.js)

The `.httpyac.config.js` file holds the basic settings for all requests, logging, and general application behavior. The sample `.httpyac.config.js` file does the following (the settings not mentioned here are not important):

- Sets the default log level tp `debug` (`log`).
- Specifies the domains for the proxy bypass (`proxyExcludeList`).
- Turns off SSL/TLS certificate validation to allow calls to endpoints that use self-signed certificates (`rejectUnauthorized`).
- Resets environment to clear all variables before each test run (`testRunResetEnvBeforeRun`).

### [`.vscode` folder](.vscode)

The `.vscode` folder holds the VSCode-specific project files. Typically, the `.vscode` folder and all files under it should be excluded from the source control, but we need to include the two important files: `settings.json` and `http.code-snippets`.

### [`settings.json` file](.vscode/settings.json)

The `settings.json` file under the `.vscode` folder defines project-specific settings for both VSCode and httpYac including the default environment that will be loaded on the IDE project start (`httpyac.environmentSelectedOnStart`), border decoration of the test regions, response output layout, tab settings, and more.

### [`http.code-snippets` file](.vscode/http.code-snippets)

The `http.code-snippets` file under the `.vscode` folder defines the code snippets that will show up when you enter `#` (or `# @`, or `###`) and press the `CTRL+SPACE` keys in an open `.http` file. The code snippets will make it easier to write code for test regions, assertions, and other operations. Since this is a project-specific file, you can adjust the snippets for your specific test scenarios and project coding conventions. For more information about code snippets, see [Snippets in Visual Studio Code](https://code.visualstudio.com/docs/editor/userdefinedsnippets).

### [`env` folder](env)

The `env` folder hold the files containing environment variables. Although httpYac supports both `dotenv` and `IntelliJ` types of environment files, this repo uses the `IntelliJ` (JSON) version. Keep in mind that you should separate sensitive environment variables from the non-sensitive ones and keep them in different files.

### [`http-client.env.json` file](env/http-client.env.json)

The `http-client.env.json` under the `env` folder is an `IntelliJ`-style environment file holding non-sensitive environment variables. This file should be checked in source control. For more information about the environment files, see [httpYac: Environments](https://httpyac.github.io/guide/environments.html).

### [`http-client.private.SAMPLE.env.json` file](env/http-client.private.SAMPLE.env.json)

The `http-client.private.SAMPLE.env.json` under the `env` folder is a sample of an environment file holding sensitive environment variables that should not be checked in source control. To use the file for storing sensitive settings, copy it to the file with the name `http-client.private.env.json`, and populate the placeholders with the actual sensitive values. Do not delete the original `http-client.private.SAMPLE.env.json` file and make sure it is in sync (except the actual sensitive values) with your `http-client.private.env.json` file, so other team members checking out the project know which settings they need to define locally.

### [`Tests` folder](Tests)

The `Tests` folder holds the `.http` test files, which can be grouped inside of subfolders. For the illustration purposes, the `Tests` folder holds two subfolders:

- `AdHoc`
- `Samples`

### [`Tests/AdHoc` folder](Tests/AdHoc)

The `AdHoc` folder contains several test files that use the public REST APIs published at [httpbin.org](https://httpbin.org/) to illustrate a few httpYac capabilities. All ad-hoc tests in this folder must be operational (you can run them as-is).

### [`Tests/Samples` folder](Tests/Samples)

The `Samples` folder contains a fake example of a typical test suite covering CRUD operations against an imaginary REST API. You can use this example as a reference, but keep in mind that as-is, they are not operational (you cannot run them until you make the required changes). For additional information about the samples, see [SAMPLES](SAMPLES.md).
