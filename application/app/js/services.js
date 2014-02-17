'use strict';
/* jshint undef:false */

angular.module('Split.services', []).
  factory('API', [function () {
    var Service = {},
        path = require('path'),
        dataPath = require('nw.gui').App.dataPath,
        Datastore = require('nedb'),
        db = {
          accounts: new Datastore({ filename: path.join(dataPath, 'accounts.db'), autoload: true }),
          shares: new Datastore({ filename: path.join(dataPath, 'shares.db'), autoload: true })
        };

    Service.addAccount = function(name, threshold, cb) {
      db.accounts.insert({
        name: name,
        threshold: threshold
      }, cb);
    };

    Service.db = db;

    return Service;

  }]);
