var test = require('tap').test,
    wd = require('wd'),
    results = require('./');

var user = process.env.SAUCE_USER,
    key = process.env.SAUCE_KEY;

function startBrowser(options, callback) {
    var browser = wd.remote('ondemand.saucelabs.com', 80, user, key);
    browser.init(options, init);

    function init(err) {
        if (err) {
            return callback(err);
        }

        browser.quit(quit);
    }

    function quit() {
        callback();
    }
}

test('set passed results', function(t) {
    t.ok(user, 'Sauce Labs user provided');
    t.ok(key, 'Sauce Labs key provided');

    startBrowser({
        name: 'Passed test',
        platform: 'Linux',
        browserName: 'firefox'
    }, started);

    function started(err) {
        t.error(err, 'started browser');

        results({
            user: user,
            key: key,
            passed: true
        }, setResults);
    }

    function setResults(err) {
        t.error(err, 'set results');
        t.end();
    }
});

test('set failed results', function(t) {
    t.ok(user, 'Sauce Labs user provided');
    t.ok(key, 'Sauce Labs key provided');

    startBrowser({
        name: 'Failed test',
        platform: 'Linux',
        browserName: 'chrome'
    }, started);

    function started(err) {
        t.error(err, 'started browser');

        results({
            user: user,
            key: key,
            passed: false
        }, setResults);
    }

    function setResults(err) {
        t.error(err, 'set results');
        t.end();
    }
});
