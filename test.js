var test = require('tap').test,
    results = require('./');

test('set passed results', function(t) {
    var user = process.env.SAUCE_USER,
        key = process.env.SAUCE_KEY;

    t.ok(user, 'Sauce Labs user provided');
    t.ok(key, 'Sauce Labs key provided');

    results({
        user: user,
        key: key,
        passed: true
    }, setResults);

    function setResults(err) {
        t.error(err, 'set results');
        t.end();
    }
});
