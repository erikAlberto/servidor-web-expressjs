const boom = require('@hapi/boom');

function notFoundMidleware(req, res) {
    const { output: { statusCode, payload}} = boom.notFound();

    res.status(statusCode).json(payload);
}

module.exports = notFoundMidleware