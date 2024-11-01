# Frequently asked questions

## Can httpYac use Chai.js assertion library?

Yes, but you need to install the [Chai.js library](https://www.chaijs.com/) manually (`npm install chai`), since it does not come with httpYac, and make sure the [Node.js](https://nodejs.org/en/download/prebuilt-installer) version is 23.0.0 or higher. For `chai` usage examples, see [demo examples](Tests/Demos/demo-7-Asserts-Chai.http).

## How do you define a file scope variable holding an empty string?

Use backticks, e.g.:

```javascript
@value=````
```
