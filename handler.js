'use strict';

const authorizer = require('./authorizer');

module.exports.authorization = (event, context, callback) => {
  const code = event.queryStringParameters.code;
  console.log(code);

  authorizer(code)
  .then(() => {
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Authorization was called',
        input: event,
      }),
    };

    callback(null, response);
  })
  .catch((error) => {
    console.log('ERRRORORR');

    const response = {
      statusCode: 500,
      body: JSON.stringify({
        message: error,
        input: event,
      }),
    };

    callback(null, response);
  });
};

module.exports.getACat = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Get a cat was called',
      input: event,
    }),
  };

  callback(null, response);
};
