exports.handler = (event, context, callback) => {
  // your server-side functionality
  callback(null, {
    statusCode: 200,
    body: { message: 'response' }
  });
};
