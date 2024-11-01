# Frequently asked questions

## Can httpYac use Chai.js assertion library?

Yes, but you need to install the [Chai.js library](https://www.chaijs.com/) manually making sure to use the pre-v5 version, e.g.:

```console
npm install chai@4.5.0
```

Also, validate that the the [Node.js](https://nodejs.org/en/download/prebuilt-installer) version is 23.0.0 or higher. For `chai` usage examples, see [demo examples](Tests/Demos/demo-7-Asserts-Chai.http).
