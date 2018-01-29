'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: '',
    options: {
        useMongoClient: true
    }
  },

  seedDB: true
};
