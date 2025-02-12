# Getting started

This document explains what you need to do to create your first REST API test projects using the code in this repository. The instructions assume that you know how to use [GIT](https://git-scm.com/) and [Visual Studio Code (VSCode)](https://code.visualstudio.com/).

## Prerequisites

Install the following components:

- [VSCode](https://code.visualstudio.com/)
- [Node.js](https://nodejs.org/)
- [httpYac CLI](https://httpyac.github.io/guide/installation_cli.html)
- [httpYac VSCode extension](https://httpyac.github.io/guide/installation_vscode.html)

If your system is behind a firewall, you may need to configure the `npm` proxy before installing the packages. To configure proxy settings, enter the these commands from command prompt (substitute the URLs and ports with the actual values):

```console
npm config set proxy http://http-proxy-server-address:port
npm config set https-proxy http://https-proxy-server-address:port
```

If you run into issues when making HTTP calls from VSCode, you may want to try setting the following environment variables before launching VSCode:

```console
SET http_proxy=http://http-proxy-server-address:port
SET https_proxy=http://https-proxy-server-address:port
SET no_proxy=localhost,127.0.0.1,yourcompanydomain
```

## Instructions

The following instructions assume that the REST API you will be testing used OAuth 2.0 with the client credentials or the authorization code grant. If the REST API uses a different authorization method, adjust the steps accordingly.

- Clone this repository to a local folder (project folder).
- Delete the `.git` subfolder from the project folder.
- In VSCode, open the project folder to load the solution.
- Open the `http-client.env.json` file (in the `env` folder) and do the following:

  - Define the environment sections to reflect your environments.
  - In each environment section of the `http-client.env.json` file:

    - Set the `baseUrl` value to reflect the base URL of the REST API you will be testing.
    - If you are using OAuth 2.0 with the client credentials grant (or the authorization code) grant, define the `tokenUrl`, `clientId`, and (if you are required to specify the scope) `scope` values.
    - If you are using OAuth 2.0 with the authorization code grant, also define the `authorizationUrl` value (if not, you do not need it).

  - Save the `http-client.env.json` file.

- Duplicate the `http-client.private.SAMPLE.env.json` file (in the `env` folder) and re-name the new file to `http-client.private.env.json` (keep the original `http-client.private.SAMPLE.env.json` file as-is for now).
- Open the `http-client.private.env.json` file and do the following:

  - Adjust the environment sections to reflect the same environments as in the `http-client.env.json` file.
  - In each environment section of the `http-client.private.env.json` file:

    - Define the `clientSecret` value to match the OAuth 2.0 client secret.

  - Save the `http-client.private.env.json` file.

- Replace the contens of the `http-client.private.SAMPLE.env.json` file with the contents of the `http-client.private.env.json` file and delete the `clientSecret` values in all environment sections. Save the `http-client.private.SAMPLE.env.json` file.

- In the `.vscode/settings.json` file:

  - In the `httpyac.environmentSelectedOnStart` setting, specify the default startup environment matching one of the environments you defined in the `http-client.env.json` file earlier.
  - Save the `.vscode/settings.json` file.

- Rename the `Samples` subfolder (under the `Tests` folder) after the endpoint or entity you will be testing (use a capitalized plural noun), e.g. `Users`, `Accounts`, `Groups`, `Orders`, etc.
- Rename the `sample-CRUD.http` file to reflect the entity and operations or types of testing you will be performing (use a lower-case singular noun), e.g. `user-CRUD.http`, `account-READ.http`, `group-GET.http`, `order-ADHOC.http`, etc.
- In the renamed `sample-CRUD.http` file, do the following:

  - Replace all instances of `Sample` and `sample` with the name you picked in the previous step (make sure you use case-sensitive search and replace).
  - Adjust the test code for the REST API you will be testing.

Once your changes are finalized, you can run the tests.

## Notes

The `sample-CRUD.http` file illustrates how to implement a repeatable automated test cases for the typical CRUD operations exposed by a REST API that follows common conventions. You REST API may be totally different, so the number of changes you will need to make can vary.

The instructions assume that you are using OAuth 2.0 with client credentials grant. If you are using OAuth 2.0 with authorization code, instead of `clientCredentials` variable in the test cases, use `authorization_code authCode` in the `Authorization:` section, e.g.:

```js
GET /samples?filter={{getFilter}}
Authorization: oauth2 authorization_code authCode
```

`clientCredentials` and `authCode` are prefixes of the variables defined in the `common.rest` file (under the `Tests/Samples` folder). These variables group properties specific for a particular authorization type. The values of these variables get initialized using environment settings defined in the `http-client.private.env.json` file and `http-client.private.env.json` files. For more information on supported authorization types and authorization variables, see [httpYac: Variables: OAth2 / OpenID Connect](https://httpyac.github.io/guide/variables.html#oauth2-openid-connect).

If you do not need samples, delete the [`AdHoc`](Tests/AdHoc/) and [`Demos`](Tests/Demos/) subfolders form the [`Tests`](/Tests/) folder.
