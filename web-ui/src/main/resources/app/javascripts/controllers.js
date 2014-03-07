'use strict';

/* Controllers */

angular.module('loyal3UIApp.controllers', [])
  //Page Level Controllers (Handles titles, etc..)
  .controller('HomeController', ['$rootScope', '$scope', function($rootScope, $scope) {
    $rootScope.pageTitle = "Homepage";
    $scope.message = 'This is the Home Page!';
  }])

  .controller('SectionController', ['$rootScope', '$scope', function($rootScope, $scope) {
    $rootScope.pageTitle = "Section Title";
    $scope.message = 'This is some random section page!';
  }])

  .controller('NotFoundController', ['$rootScope', '$scope', function($rootScope, $scope) {
    $rootScope.pageTitle = "Not Found!";
    $scope.message = 'Page Not Found!';
  }])


  //Component Controllers (may want to split these into 2 separate files)
  .controller('MainController', ['$scope', '$log', '$location', function($scope, $log, $location) {
    $scope.message = 'Check Out the Main Controller!';
  }])

  .controller('SampleComponentController', ['$scope', '$http', '$log', function($scope, $http, $log) {
    $log.info("We're in this method!");
    $http.get('/api/sample/helloworld').success(function(data) {
      $log.info("Data: "+print_r(data));
      $scope.paramDynamic = data.paramDynamic;
      $scope.param2 = data.param2;
      $scope.param3 = data.param3;
    });
  }])

  /**
   * MODAL Controllers:
   * Usage (pass the partial name to the open method)
   */
  .controller('ModalCtrl', ['$scope', '$modal', '$log', function($scope, $modal, $log) {
    $scope.open = function (modalPartial) {
      modalPartial = (modalPartial) ? modalPartial : "generic";
      $log.info($modal);
      $log.info($scope);
      var modalInstance = $modal.open({
        controller: 'ModalInstanceCtrl',
        templateUrl: '/partials/modals/'+modalPartial+'.html'
      });

      modalInstance.result.then(function () {
        //nothing here
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };  
  }])

  .controller('ModalInstanceCtrl', ['$scope', function($scope, $modalInstance) {
    $scope.ok = function () {};

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  }]);