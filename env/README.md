# `env` folder

The `env` folder holds the files containing environment variables. Although httpYac supports both `dotenv` and `IntelliJ` types of environment files, this repo uses the `IntelliJ` (JSON) version. Keep in mind that you should separate sensitive environment variables from the non-sensitive ones and keep them in different files.

## [`http-client.env.json` file](http-client.env.json)

The `http-client.env.json` under the `env` folder is an `IntelliJ`-style environment file holding non-sensitive environment variables. This file should be checked in source control. For more information about the environment files, see [httpYac: Environments](https://httpyac.github.io/guide/environments.html).

## [`http-client.private.SAMPLE.env.json` file](http-client.private.SAMPLE.env.json)

The `http-client.private.SAMPLE.env.json` under the `env` folder is a sample of an environment file holding sensitive environment variables that should not be checked in source control. To use the file for storing sensitive settings, copy it to the file with the name `http-client.private.env.json`, and populate the placeholders with the actual sensitive values. Do not delete the original `http-client.private.SAMPLE.env.json` file and make sure it is in sync (except the actual sensitive values) with your `http-client.private.env.json` file, so other team members checking out the project know which settings they need to define locally.
