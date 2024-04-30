const http = require('http');

// TODO: What does this function return?
// This function returns a promise that sends an asynchronous request to an api at the given url.
const asyncRequest = (url) =>
  new Promise((resolve, reject) => {
    let error;
    let rawData = '';

    // Use the http.get method to send an asynchronous request to an api at the given url.
    http
      .get(url, (res) => {
        // Check for an error code (not equal to 200)
        if (res.statusCode !== 200) {
          // Creates an error object representing the failed http request
          error = new Error(`Request Failed.\nStatus Code: ${res.statusCode}`);
          res.resume();
          return;
        }

        res.setEncoding('utf8');
        res.on('data', (chunk) => {
          rawData += chunk;
        });
      })
      .on('error', (e) => {
        reject(e);
      })
      .on('close', () => {
        // The 'close' event fires after the incoming message is completely received. Error will be undefined if the
        // response status code was 200.
        if (error) {
          // TODO: What the following line do?
          // Rejects the promise with the error object representing the failed http request
          reject(error);
        } else {
          // TODO: What does the following line do?
          // Resolves the promise with the raw data received from the api
          resolve(rawData);
        }
      });
  });

asyncRequest('http://numbersapi.com/random/trivia')
  // TODO: When is the callback function passed to .then() called by the promise?
  // The callback function passed to .then() is called when the promise is resolved.
  .then((data) => console.log(data))
  // TODO: When is the callback function passed to .catch() called by the promise?
  // The callback function passed to .catch() is called when the promise is rejected.
  .catch((error) => console.log(error));
