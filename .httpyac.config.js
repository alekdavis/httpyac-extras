module.exports = {
  "log": {
    "level": "debug",
    "supportAnsiColors": true,
  },
  "cookieJarEnabled": true,
  "envDirName": 'env',
  "proxyExcludeList": [
    "localhost"
  ],
  "request": {
    "https":  {
      "rejectUnauthorized": false
     }
  },
  "testRunResetEnvBeforeRun": true
}