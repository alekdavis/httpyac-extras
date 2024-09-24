module.exports = {
  "log": {
    "level": "debug",
    "supportAnsiColors": true,
  },
  "cookieJarEnabled": true,
  "envDirName": 'env',
  "proxyExcludeList": [
    "localhost",
    "127.0.0.1"
  ],
  "request": {
    "https":  {
      "rejectUnauthorized": false
     }
  }
}