# TIPS

## Check and keep versions up to date

Here are the commands to check the versions of node, npm, and httpyac:

```console
node -v
npm -v
httpyac --version
```

Here are the commands to install the latest versions of npm and httpyac CLI:

```console
npm install-g npm
npm update -g httpyac
```

If you want to update all versions of globally installed npm packages:

```console
npm update -g
```

NOTE: There are some [Windows quirks](https://docs.npmjs.com/try-the-latest-stable-version-of-npm#upgrading-on-windows) you need to be aware of. There are more [suggestions at StackOverflow](https://stackoverflow.com/questions/18412129/how-can-i-update-npm-on-windows/31520672).

## Prevent common files from appearing as tests

If you have common files that contain shared code without tests, you can exclude them from the test explorer (in the `Testing` view) by giving them extension `.rest` (instead of `.http`) and setting the following httpYac extension setting to only show `http` files (or use the `Test Items Extensions` setting in the settings user interface):

```json
"httpyac.testItemExtensions": [
  "http"
]
```
