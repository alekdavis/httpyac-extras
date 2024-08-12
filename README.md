# httpyac-extras

This repo illustrates how to use [httpYac](https://httpyac.github.io/) for REST API ad-hoc testing and test automation. It defines a sample project structure and environment configuration that you can adjust and/or extend for your specific testing needs.

## Overview

This document describes the project structure and explains the purpose of the project files and folders. For additional information, check:

- [SAMPLES](SAMPLES.md)
- [TIPS](TIPS.md)
- [FAQs](FAQs.md)

## Project structure

The following files and folders are important for the project.

### [`.gitignore` file](.gitignore)

The important modifications to the `.gitignore` file include:

- Inclusion of the VSCoce code snippets, settings, and documentation files that would typically be ignored along with the contents of the `.vscode` folder that holds them.
- Exclusion of the private environment variable file (`http-client.private.env.json`) intended for local storage of sensitive settings (client secrets, passwords, etc.):

```text
.vscode/*
!.vscode/*.md
!.vscode/settings.json
!.vscode/*.code-snippets
*.private.env.json
```

### [`.httpyac.config.js` file](.httpyac.config.js)

The `.httpyac.config.js` file holds the basic settings for all requests, logging, and general application behaviors including, but not limited to:

- Sets the default `debug` log level to (via the `log` setting).
- Specifies the domains for the proxy bypass (via the `proxyExcludeList` setting).
- Turns off SSL/TLS certificate validation to allow calls to endpoints that use self-signed certificates (via the `rejectUnauthorized` setting).
- Resets environment to clear all variables before each test run (via the `testRunResetEnvBeforeRun` setting).

### [`.vscode` folder](.vscode)

The `.vscode` folder holds Visual Studio Code-specific files, most of which do not need to be checked into a source control system; however, there are several exceptions described in the [folder documentation](.vscode).

### [`env` folder](env)

The `env` folder holds the files containing environment variables. For additional information about the environment folder and files, see the [folder documentation](env).

### [`Tests` folder](Tests)

The `Tests` folder holds the test files which can be logically grouped in subfolders. For additional information about the test folder and files, see the [folder documentation](Tests).
