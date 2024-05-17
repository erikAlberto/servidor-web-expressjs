const config = require('../../config');

function createCacheMidleware(seconds, _isCoacheActivated= ! config.dev) {
    return function cacheMidleware(req, res, next) {
        if (_isCacheActivated) {
            res.set(`Cache-Control', 'public, max-age=${seconds}`);
        }

        next();
    };
}


module.exports = createCacheMidleware;