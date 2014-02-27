'use strict';

/* Controllers */

angular.module('loyal3UIApp.controllers', [])
  .controller('MainController', ['$scope', '$log', '$location', function($scope, $log, $location) {
    $scope.message = 'Check Out the Main Controller!';
  }])

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