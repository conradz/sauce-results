# sauce-results

Helper to publish the results of a [Sauce Labs](https://saucelabs.com/) test
job. Then you can use the awesome
[status images](https://saucelabs.com/docs/status-images).

Simply call the function with the options object and a callback function.

## Example

```js
var results = require('sauce-results');

results({
    user: sauceUser,
    key: sauceKey,
    job: sauceJobId,
    passed: true
}, function(err) {
    // Handle err if it exists
});
```

## Options

 * `user`: The Sauce Labs username for the tests
 * `key`: The Sauce Labs key for the provided user
 * `job`: The Sauce Labs job ID. If none is provided, it will retrieve the last job ID.
 * `passed`: Boolean indicating if the job passed or not

