'use strict';

/* Services */

// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('loyal3UIApp.services', [])
  .value('version', '0.1')
  .value('apiRegistry', {
    sampleData  : "/api/sample/%s"
  })

  .service('SampleService', ['$http', 'apiRegistry', function($http, apiRegistry) {
    this.get = function (dynamicParam, callback) {
      var apiUrl = apiRegistry.sampleData.format(dynamicParam);
      $http({method: 'GET', url: apiUrl})
        .success(function(data, status, headers, config) {
          callback(data, status, headers, config);
        })
        .error(function(data, status, headers, config) {
          callback(data, status, headers, config)
        });
    }
  }])
