const config  = require("../config");

function withErrorStack(error, stack, _isStackShow = config.dev) {
    if (_isStackShow) {
        return { ...error, stack };
    }
    return error;
}

module.exports = withErrorStack;