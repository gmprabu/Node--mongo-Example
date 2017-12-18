var mongoose = require('mongoose');


console.log('[MONGODB] Connecting...');

module.exports = mongoose.connect(
  'mongodb://localhost/testing',
  function (err) {
    if (err) {
      console.error('[MONGODB] Connection error', err);
    } else {
      console.log('[MONGODB] Connected!');
    }
  }
);