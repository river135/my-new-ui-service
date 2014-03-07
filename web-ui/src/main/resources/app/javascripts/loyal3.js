'use strict';

// Declare app level module which depends on filters, and services
angular.module('loyal3UIApp', [
  'ui.bootstrap',
  'ngRoute',
  'loyal3UIApp.filters',
  'loyal3UIApp.services',
  'loyal3UIApp.directives',
  'loyal3UIApp.controllers'
]).
config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider
    //Homepage
    .when('/', {
      templateUrl : '/pages/home.html',
      controller  : 'HomeController'
    })

    //Home
    .when('/view/home', {
      templateUrl : '/pages/home.html',
      controller  : 'HomeController'
    })

    //Section
    .when('/view/section', {
      templateUrl : '/pages/section.html',
      controller  : 'SectionController'
    })

    //Page Not Found
    .when('/view/404', {
      templateUrl: '/pages/notfound.html',
      controller: 'NotFoundController'
    })

    //Not Found
    .otherwise({
      redirectTo: '/view/404'
    });
}]);

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
'use strict';

/* Directives */


angular.module('loyal3UIApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);

'use strict';

/* Filters */

angular.module('loyal3UIApp.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  }]);

'use strict';

// Declare app level module which depends on filters, and services
angular.module('loyal3UIApp', [
  'ui.bootstrap',
  'ngRoute',
  'loyal3UIApp.filters',
  'loyal3UIApp.services',
  'loyal3UIApp.directives',
  'loyal3UIApp.controllers'
]).
config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider
    //Homepage
    .when('/', {
      templateUrl : '/pages/home.html',
      controller  : 'HomeController'
    })

    //Home
    .when('/view/home', {
      templateUrl : '/pages/home.html',
      controller  : 'HomeController'
    })

    //Section
    .when('/view/section', {
      templateUrl : '/pages/section.html',
      controller  : 'SectionController'
    })

    //Page Not Found
    .when('/view/404', {
      templateUrl: '/pages/notfound.html',
      controller: 'NotFoundController'
    })

    //Not Found
    .otherwise({
      redirectTo: '/view/404'
    });
}]);

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
'use strict';

/* Directives */


angular.module('loyal3UIApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);

'use strict';

/* Filters */

angular.module('loyal3UIApp.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  }]);

'use strict';

// Declare app level module which depends on filters, and services
angular.module('loyal3UIApp', [
  'ui.bootstrap',
  'ngRoute',
  'loyal3UIApp.filters',
  'loyal3UIApp.services',
  'loyal3UIApp.directives',
  'loyal3UIApp.controllers'
]).
config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider
    //Homepage
    .when('/', {
      templateUrl : '/pages/home.html',
      controller  : 'HomeController'
    })

    //Home
    .when('/view/home', {
      templateUrl : '/pages/home.html',
      controller  : 'HomeController'
    })

    //Section
    .when('/view/section', {
      templateUrl : '/pages/section.html',
      controller  : 'SectionController'
    })

    //Page Not Found
    .when('/view/404', {
      templateUrl: '/pages/notfound.html',
      controller: 'NotFoundController'
    })

    //Not Found
    .otherwise({
      redirectTo: '/view/404'
    });
}]);

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
'use strict';

/* Directives */


angular.module('loyal3UIApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);

'use strict';

/* Filters */

angular.module('loyal3UIApp.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  }]);

'use strict';

// Declare app level module which depends on filters, and services
angular.module('loyal3UIApp', [
  'ui.bootstrap',
  'ngRoute',
  'loyal3UIApp.filters',
  'loyal3UIApp.services',
  'loyal3UIApp.directives',
  'loyal3UIApp.controllers'
]).
config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider
    //Homepage
    .when('/', {
      templateUrl : '/pages/home.html',
      controller  : 'HomeController'
    })

    //Home
    .when('/view/home', {
      templateUrl : '/pages/home.html',
      controller  : 'HomeController'
    })

    //Section
    .when('/view/section', {
      templateUrl : '/pages/section.html',
      controller  : 'SectionController'
    })

    //Page Not Found
    .when('/view/404', {
      templateUrl: '/pages/notfound.html',
      controller: 'NotFoundController'
    })

    //Not Found
    .otherwise({
      redirectTo: '/view/404'
    });
}]);

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
'use strict';

/* Directives */


angular.module('loyal3UIApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);

'use strict';

/* Filters */

angular.module('loyal3UIApp.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  }]);

'use strict';

// Declare app level module which depends on filters, and services
angular.module('loyal3UIApp', [
  'ui.bootstrap',
  'ngRoute',
  'loyal3UIApp.filters',
  'loyal3UIApp.services',
  'loyal3UIApp.directives',
  'loyal3UIApp.controllers'
]).
config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider
    //Homepage
    .when('/', {
      templateUrl : '/pages/home.html',
      controller  : 'HomeController'
    })

    //Home
    .when('/view/home', {
      templateUrl : '/pages/home.html',
      controller  : 'HomeController'
    })

    //Section
    .when('/view/section', {
      templateUrl : '/pages/section.html',
      controller  : 'SectionController'
    })

    //Page Not Found
    .when('/view/404', {
      templateUrl: '/pages/notfound.html',
      controller: 'NotFoundController'
    })

    //Not Found
    .otherwise({
      redirectTo: '/view/404'
    });
}]);

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
'use strict';

/* Directives */


angular.module('loyal3UIApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);

'use strict';

/* Filters */

angular.module('loyal3UIApp.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  }]);

'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('loyal3UIApp.services', []).
  value('version', '0.1');

"use strict";angular.module("loyal3UIApp",["ui.bootstrap","ngRoute","loyal3UIApp.filters","loyal3UIApp.services","loyal3UIApp.directives","loyal3UIApp.controllers"]).config(["$routeProvider","$locationProvider",function(o,e){e.html5Mode(!0),o.when("/",{templateUrl:"/pages/home.html",controller:"HomeController"}).when("/view/home",{templateUrl:"/pages/home.html",controller:"HomeController"}).when("/view/section",{templateUrl:"/pages/section.html",controller:"SectionController"}).when("/view/404",{templateUrl:"/pages/notfound.html",controller:"NotFoundController"}).otherwise({redirectTo:"/view/404"})}]),angular.module("loyal3UIApp.controllers",[]).controller("MainController",["$scope","$log","$location",function(o){o.message="Check Out the Main Controller!"}]).controller("HomeController",["$rootScope","$scope",function(o,e){o.pageTitle="Homepage",e.message="This is the Home Page!"}]).controller("SectionController",["$rootScope","$scope",function(o,e){o.pageTitle="Section Title",e.message="This is some random section page!"}]).controller("NotFoundController",["$rootScope","$scope",function(o,e){o.pageTitle="Not Found!",e.message="Page Not Found!"}]).controller("ModalCtrl",["$scope","$modal","$log",function(o,e,l){o.open=function(t){t=t?t:"generic",l.info(e),l.info(o);var n=e.open({controller:"ModalInstanceCtrl",templateUrl:"/partials/modals/"+t+".html"});n.result.then(function(){},function(){l.info("Modal dismissed at: "+new Date)})}}]).controller("ModalInstanceCtrl",["$scope",function(o,e){o.ok=function(){},o.cancel=function(){e.dismiss("cancel")}}]),angular.module("loyal3UIApp.directives",[]).directive("appVersion",["version",function(o){return function(e,l){l.text(o)}}]),angular.module("loyal3UIApp.filters",[]).filter("interpolate",["version",function(o){return function(e){return String(e).replace(/\%VERSION\%/gm,o)}}]),angular.module("loyal3UIApp.services",[]).value("version","0.1");
'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('loyal3UIApp.services', []).
  value('version', '0.1');

"use strict";angular.module("loyal3UIApp",["ui.bootstrap","ngRoute","loyal3UIApp.filters","loyal3UIApp.services","loyal3UIApp.directives","loyal3UIApp.controllers"]).config(["$routeProvider","$locationProvider",function(o,e){e.html5Mode(!0),o.when("/",{templateUrl:"/pages/home.html",controller:"HomeController"}).when("/view/home",{templateUrl:"/pages/home.html",controller:"HomeController"}).when("/view/section",{templateUrl:"/pages/section.html",controller:"SectionController"}).when("/view/404",{templateUrl:"/pages/notfound.html",controller:"NotFoundController"}).otherwise({redirectTo:"/view/404"})}]),angular.module("loyal3UIApp.controllers",[]).controller("MainController",["$scope","$log","$location",function(o){o.message="Check Out the Main Controller!"}]).controller("HomeController",["$rootScope","$scope",function(o,e){o.pageTitle="Homepage",e.message="This is the Home Page!"}]).controller("SectionController",["$rootScope","$scope",function(o,e){o.pageTitle="Section Title",e.message="This is some random section page!"}]).controller("NotFoundController",["$rootScope","$scope",function(o,e){o.pageTitle="Not Found!",e.message="Page Not Found!"}]).controller("ModalCtrl",["$scope","$modal","$log",function(o,e,l){o.open=function(t){t=t?t:"generic",l.info(e),l.info(o);var n=e.open({controller:"ModalInstanceCtrl",templateUrl:"/partials/modals/"+t+".html"});n.result.then(function(){},function(){l.info("Modal dismissed at: "+new Date)})}}]).controller("ModalInstanceCtrl",["$scope",function(o,e){o.ok=function(){},o.cancel=function(){e.dismiss("cancel")}}]),angular.module("loyal3UIApp.directives",[]).directive("appVersion",["version",function(o){return function(e,l){l.text(o)}}]),angular.module("loyal3UIApp.filters",[]).filter("interpolate",["version",function(o){return function(e){return String(e).replace(/\%VERSION\%/gm,o)}}]),angular.module("loyal3UIApp",["ui.bootstrap","ngRoute","loyal3UIApp.filters","loyal3UIApp.services","loyal3UIApp.directives","loyal3UIApp.controllers"]).config(["$routeProvider","$locationProvider",function(o,e){e.html5Mode(!0),o.when("/",{templateUrl:"/pages/home.html",controller:"HomeController"}).when("/view/home",{templateUrl:"/pages/home.html",controller:"HomeController"}).when("/view/section",{templateUrl:"/pages/section.html",controller:"SectionController"}).when("/view/404",{templateUrl:"/pages/notfound.html",controller:"NotFoundController"}).otherwise({redirectTo:"/view/404"})}]),angular.module("loyal3UIApp.controllers",[]).controller("MainController",["$scope","$log","$location",function(o){o.message="Check Out the Main Controller!"}]).controller("HomeController",["$rootScope","$scope",function(o,e){o.pageTitle="Homepage",e.message="This is the Home Page!"}]).controller("SectionController",["$rootScope","$scope",function(o,e){o.pageTitle="Section Title",e.message="This is some random section page!"}]).controller("NotFoundController",["$rootScope","$scope",function(o,e){o.pageTitle="Not Found!",e.message="Page Not Found!"}]).controller("ModalCtrl",["$scope","$modal","$log",function(o,e,l){o.open=function(t){t=t?t:"generic",l.info(e),l.info(o);var n=e.open({controller:"ModalInstanceCtrl",templateUrl:"/partials/modals/"+t+".html"});n.result.then(function(){},function(){l.info("Modal dismissed at: "+new Date)})}}]).controller("ModalInstanceCtrl",["$scope",function(o,e){o.ok=function(){},o.cancel=function(){e.dismiss("cancel")}}]),angular.module("loyal3UIApp.directives",[]).directive("appVersion",["version",function(o){return function(e,l){l.text(o)}}]),angular.module("loyal3UIApp.filters",[]).filter("interpolate",["version",function(o){return function(e){return String(e).replace(/\%VERSION\%/gm,o)}}]),angular.module("loyal3UIApp.services",[]).value("version","0.1"),angular.module("loyal3UIApp",["ui.bootstrap","ngRoute","loyal3UIApp.filters","loyal3UIApp.services","loyal3UIApp.directives","loyal3UIApp.controllers"]).config(["$routeProvider","$locationProvider",function(o,e){e.html5Mode(!0),o.when("/",{templateUrl:"/pages/home.html",controller:"HomeController"}).when("/view/home",{templateUrl:"/pages/home.html",controller:"HomeController"}).when("/view/section",{templateUrl:"/pages/section.html",controller:"SectionController"}).when("/view/404",{templateUrl:"/pages/notfound.html",controller:"NotFoundController"}).otherwise({redirectTo:"/view/404"})}]),angular.module("loyal3UIApp.controllers",[]).controller("MainController",["$scope","$log","$location",function(o){o.message="Check Out the Main Controller!"}]).controller("HomeController",["$rootScope","$scope",function(o,e){o.pageTitle="Homepage",e.message="This is the Home Page!"}]).controller("SectionController",["$rootScope","$scope",function(o,e){o.pageTitle="Section Title",e.message="This is some random section page!"}]).controller("NotFoundController",["$rootScope","$scope",function(o,e){o.pageTitle="Not Found!",e.message="Page Not Found!"}]).controller("ModalCtrl",["$scope","$modal","$log",function(o,e,l){o.open=function(t){t=t?t:"generic",l.info(e),l.info(o);var n=e.open({controller:"ModalInstanceCtrl",templateUrl:"/partials/modals/"+t+".html"});n.result.then(function(){},function(){l.info("Modal dismissed at: "+new Date)})}}]).controller("ModalInstanceCtrl",["$scope",function(o,e){o.ok=function(){},o.cancel=function(){e.dismiss("cancel")}}]),angular.module("loyal3UIApp.directives",[]).directive("appVersion",["version",function(o){return function(e,l){l.text(o)}}]),angular.module("loyal3UIApp.filters",[]).filter("interpolate",["version",function(o){return function(e){return String(e).replace(/\%VERSION\%/gm,o)}}]),angular.module("loyal3UIApp.services",[]).value("version","0.1"),angular.module("loyal3UIApp.services",[]).value("version","0.1");
'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('loyal3UIApp.services', []).
  value('version', '0.1');

"use strict";angular.module("loyal3UIApp",["ui.bootstrap","ngRoute","loyal3UIApp.filters","loyal3UIApp.services","loyal3UIApp.directives","loyal3UIApp.controllers"]).config(["$routeProvider","$locationProvider",function(o,e){e.html5Mode(!0),o.when("/",{templateUrl:"/pages/home.html",controller:"HomeController"}).when("/view/home",{templateUrl:"/pages/home.html",controller:"HomeController"}).when("/view/section",{templateUrl:"/pages/section.html",controller:"SectionController"}).when("/view/404",{templateUrl:"/pages/notfound.html",controller:"NotFoundController"}).otherwise({redirectTo:"/view/404"})}]),angular.module("loyal3UIApp.controllers",[]).controller("MainController",["$scope","$log","$location",function(o){o.message="Check Out the Main Controller!"}]).controller("HomeController",["$rootScope","$scope",function(o,e){o.pageTitle="Homepage",e.message="This is the Home Page!"}]).controller("SectionController",["$rootScope","$scope",function(o,e){o.pageTitle="Section Title",e.message="This is some random section page!"}]).controller("NotFoundController",["$rootScope","$scope",function(o,e){o.pageTitle="Not Found!",e.message="Page Not Found!"}]).controller("ModalCtrl",["$scope","$modal","$log",function(o,e,l){o.open=function(t){t=t?t:"generic",l.info(e),l.info(o);var n=e.open({controller:"ModalInstanceCtrl",templateUrl:"/partials/modals/"+t+".html"});n.result.then(function(){},function(){l.info("Modal dismissed at: "+new Date)})}}]).controller("ModalInstanceCtrl",["$scope",function(o,e){o.ok=function(){},o.cancel=function(){e.dismiss("cancel")}}]),angular.module("loyal3UIApp.directives",[]).directive("appVersion",["version",function(o){return function(e,l){l.text(o)}}]),angular.module("loyal3UIApp.filters",[]).filter("interpolate",["version",function(o){return function(e){return String(e).replace(/\%VERSION\%/gm,o)}}]),angular.module("loyal3UIApp",["ui.bootstrap","ngRoute","loyal3UIApp.filters","loyal3UIApp.services","loyal3UIApp.directives","loyal3UIApp.controllers"]).config(["$routeProvider","$locationProvider",function(o,e){e.html5Mode(!0),o.when("/",{templateUrl:"/pages/home.html",controller:"HomeController"}).when("/view/home",{templateUrl:"/pages/home.html",controller:"HomeController"}).when("/view/section",{templateUrl:"/pages/section.html",controller:"SectionController"}).when("/view/404",{templateUrl:"/pages/notfound.html",controller:"NotFoundController"}).otherwise({redirectTo:"/view/404"})}]),angular.module("loyal3UIApp.controllers",[]).controller("MainController",["$scope","$log","$location",function(o){o.message="Check Out the Main Controller!"}]).controller("HomeController",["$rootScope","$scope",function(o,e){o.pageTitle="Homepage",e.message="This is the Home Page!"}]).controller("SectionController",["$rootScope","$scope",function(o,e){o.pageTitle="Section Title",e.message="This is some random section page!"}]).controller("NotFoundController",["$rootScope","$scope",function(o,e){o.pageTitle="Not Found!",e.message="Page Not Found!"}]).controller("ModalCtrl",["$scope","$modal","$log",function(o,e,l){o.open=function(t){t=t?t:"generic",l.info(e),l.info(o);var n=e.open({controller:"ModalInstanceCtrl",templateUrl:"/partials/modals/"+t+".html"});n.result.then(function(){},function(){l.info("Modal dismissed at: "+new Date)})}}]).controller("ModalInstanceCtrl",["$scope",function(o,e){o.ok=function(){},o.cancel=function(){e.dismiss("cancel")}}]),angular.module("loyal3UIApp.directives",[]).directive("appVersion",["version",function(o){return function(e,l){l.text(o)}}]),angular.module("loyal3UIApp.filters",[]).filter("interpolate",["version",function(o){return function(e){return String(e).replace(/\%VERSION\%/gm,o)}}]),angular.module("loyal3UIApp",["ui.bootstrap","ngRoute","loyal3UIApp.filters","loyal3UIApp.services","loyal3UIApp.directives","loyal3UIApp.controllers"]).config(["$routeProvider","$locationProvider",function(o,e){e.html5Mode(!0),o.when("/",{templateUrl:"/pages/home.html",controller:"HomeController"}).when("/view/home",{templateUrl:"/pages/home.html",controller:"HomeController"}).when("/view/section",{templateUrl:"/pages/section.html",controller:"SectionController"}).when("/view/404",{templateUrl:"/pages/notfound.html",controller:"NotFoundController"}).otherwise({redirectTo:"/view/404"})}]),angular.module("loyal3UIApp.controllers",[]).controller("MainController",["$scope","$log","$location",function(o){o.message="Check Out the Main Controller!"}]).controller("HomeController",["$rootScope","$scope",function(o,e){o.pageTitle="Homepage",e.message="This is the Home Page!"}]).controller("SectionController",["$rootScope","$scope",function(o,e){o.pageTitle="Section Title",e.message="This is some random section page!"}]).controller("NotFoundController",["$rootScope","$scope",function(o,e){o.pageTitle="Not Found!",e.message="Page Not Found!"}]).controller("ModalCtrl",["$scope","$modal","$log",function(o,e,l){o.open=function(t){t=t?t:"generic",l.info(e),l.info(o);var n=e.open({controller:"ModalInstanceCtrl",templateUrl:"/partials/modals/"+t+".html"});n.result.then(function(){},function(){l.info("Modal dismissed at: "+new Date)})}}]).controller("ModalInstanceCtrl",["$scope",function(o,e){o.ok=function(){},o.cancel=function(){e.dismiss("cancel")}}]),angular.module("loyal3UIApp.directives",[]).directive("appVersion",["version",function(o){return function(e,l){l.text(o)}}]),angular.module("loyal3UIApp.filters",[]).filter("interpolate",["version",function(o){return function(e){return String(e).replace(/\%VERSION\%/gm,o)}}]),angular.module("loyal3UIApp.services",[]).value("version","0.1"),angular.module("loyal3UIApp",["ui.bootstrap","ngRoute","loyal3UIApp.filters","loyal3UIApp.services","loyal3UIApp.directives","loyal3UIApp.controllers"]).config(["$routeProvider","$locationProvider",function(o,e){e.html5Mode(!0),o.when("/",{templateUrl:"/pages/home.html",controller:"HomeController"}).when("/view/home",{templateUrl:"/pages/home.html",controller:"HomeController"}).when("/view/section",{templateUrl:"/pages/section.html",controller:"SectionController"}).when("/view/404",{templateUrl:"/pages/notfound.html",controller:"NotFoundController"}).otherwise({redirectTo:"/view/404"})}]),angular.module("loyal3UIApp.controllers",[]).controller("MainController",["$scope","$log","$location",function(o){o.message="Check Out the Main Controller!"}]).controller("HomeController",["$rootScope","$scope",function(o,e){o.pageTitle="Homepage",e.message="This is the Home Page!"}]).controller("SectionController",["$rootScope","$scope",function(o,e){o.pageTitle="Section Title",e.message="This is some random section page!"}]).controller("NotFoundController",["$rootScope","$scope",function(o,e){o.pageTitle="Not Found!",e.message="Page Not Found!"}]).controller("ModalCtrl",["$scope","$modal","$log",function(o,e,l){o.open=function(t){t=t?t:"generic",l.info(e),l.info(o);var n=e.open({controller:"ModalInstanceCtrl",templateUrl:"/partials/modals/"+t+".html"});n.result.then(function(){},function(){l.info("Modal dismissed at: "+new Date)})}}]).controller("ModalInstanceCtrl",["$scope",function(o,e){o.ok=function(){},o.cancel=function(){e.dismiss("cancel")}}]),angular.module("loyal3UIApp.directives",[]).directive("appVersion",["version",function(o){return function(e,l){l.text(o)}}]),angular.module("loyal3UIApp.filters",[]).filter("interpolate",["version",function(o){return function(e){return String(e).replace(/\%VERSION\%/gm,o)}}]),angular.module("loyal3UIApp.services",[]).value("version","0.1"),angular.module("loyal3UIApp.services",[]).value("version","0.1"),angular.module("loyal3UIApp",["ui.bootstrap","ngRoute","loyal3UIApp.filters","loyal3UIApp.services","loyal3UIApp.directives","loyal3UIApp.controllers"]).config(["$routeProvider","$locationProvider",function(o,e){e.html5Mode(!0),o.when("/",{templateUrl:"/pages/home.html",controller:"HomeController"}).when("/view/home",{templateUrl:"/pages/home.html",controller:"HomeController"}).when("/view/section",{templateUrl:"/pages/section.html",controller:"SectionController"}).when("/view/404",{templateUrl:"/pages/notfound.html",controller:"NotFoundController"}).otherwise({redirectTo:"/view/404"})}]),angular.module("loyal3UIApp.controllers",[]).controller("MainController",["$scope","$log","$location",function(o){o.message="Check Out the Main Controller!"}]).controller("HomeController",["$rootScope","$scope",function(o,e){o.pageTitle="Homepage",e.message="This is the Home Page!"}]).controller("SectionController",["$rootScope","$scope",function(o,e){o.pageTitle="Section Title",e.message="This is some random section page!"}]).controller("NotFoundController",["$rootScope","$scope",function(o,e){o.pageTitle="Not Found!",e.message="Page Not Found!"}]).controller("ModalCtrl",["$scope","$modal","$log",function(o,e,l){o.open=function(t){t=t?t:"generic",l.info(e),l.info(o);var n=e.open({controller:"ModalInstanceCtrl",templateUrl:"/partials/modals/"+t+".html"});n.result.then(function(){},function(){l.info("Modal dismissed at: "+new Date)})}}]).controller("ModalInstanceCtrl",["$scope",function(o,e){o.ok=function(){},o.cancel=function(){e.dismiss("cancel")}}]),angular.module("loyal3UIApp.directives",[]).directive("appVersion",["version",function(o){return function(e,l){l.text(o)}}]),angular.module("loyal3UIApp.filters",[]).filter("interpolate",["version",function(o){return function(e){return String(e).replace(/\%VERSION\%/gm,o)}}]),angular.module("loyal3UIApp",["ui.bootstrap","ngRoute","loyal3UIApp.filters","loyal3UIApp.services","loyal3UIApp.directives","loyal3UIApp.controllers"]).config(["$routeProvider","$locationProvider",function(o,e){e.html5Mode(!0),o.when("/",{templateUrl:"/pages/home.html",controller:"HomeController"}).when("/view/home",{templateUrl:"/pages/home.html",controller:"HomeController"}).when("/view/section",{templateUrl:"/pages/section.html",controller:"SectionController"}).when("/view/404",{templateUrl:"/pages/notfound.html",controller:"NotFoundController"}).otherwise({redirectTo:"/view/404"})}]),angular.module("loyal3UIApp.controllers",[]).controller("MainController",["$scope","$log","$location",function(o){o.message="Check Out the Main Controller!"}]).controller("HomeController",["$rootScope","$scope",function(o,e){o.pageTitle="Homepage",e.message="This is the Home Page!"}]).controller("SectionController",["$rootScope","$scope",function(o,e){o.pageTitle="Section Title",e.message="This is some random section page!"}]).controller("NotFoundController",["$rootScope","$scope",function(o,e){o.pageTitle="Not Found!",e.message="Page Not Found!"}]).controller("ModalCtrl",["$scope","$modal","$log",function(o,e,l){o.open=function(t){t=t?t:"generic",l.info(e),l.info(o);var n=e.open({controller:"ModalInstanceCtrl",templateUrl:"/partials/modals/"+t+".html"});n.result.then(function(){},function(){l.info("Modal dismissed at: "+new Date)})}}]).controller("ModalInstanceCtrl",["$scope",function(o,e){o.ok=function(){},o.cancel=function(){e.dismiss("cancel")}}]),angular.module("loyal3UIApp.directives",[]).directive("appVersion",["version",function(o){return function(e,l){l.text(o)}}]),angular.module("loyal3UIApp.filters",[]).filter("interpolate",["version",function(o){return function(e){return String(e).replace(/\%VERSION\%/gm,o)}}]),angular.module("loyal3UIApp.services",[]).value("version","0.1"),angular.module("loyal3UIApp",["ui.bootstrap","ngRoute","loyal3UIApp.filters","loyal3UIApp.services","loyal3UIApp.directives","loyal3UIApp.controllers"]).config(["$routeProvider","$locationProvider",function(o,e){e.html5Mode(!0),o.when("/",{templateUrl:"/pages/home.html",controller:"HomeController"}).when("/view/home",{templateUrl:"/pages/home.html",controller:"HomeController"}).when("/view/section",{templateUrl:"/pages/section.html",controller:"SectionController"}).when("/view/404",{templateUrl:"/pages/notfound.html",controller:"NotFoundController"}).otherwise({redirectTo:"/view/404"})}]),angular.module("loyal3UIApp.controllers",[]).controller("MainController",["$scope","$log","$location",function(o){o.message="Check Out the Main Controller!"}]).controller("HomeController",["$rootScope","$scope",function(o,e){o.pageTitle="Homepage",e.message="This is the Home Page!"}]).controller("SectionController",["$rootScope","$scope",function(o,e){o.pageTitle="Section Title",e.message="This is some random section page!"}]).controller("NotFoundController",["$rootScope","$scope",function(o,e){o.pageTitle="Not Found!",e.message="Page Not Found!"}]).controller("ModalCtrl",["$scope","$modal","$log",function(o,e,l){o.open=function(t){t=t?t:"generic",l.info(e),l.info(o);var n=e.open({controller:"ModalInstanceCtrl",templateUrl:"/partials/modals/"+t+".html"});n.result.then(function(){},function(){l.info("Modal dismissed at: "+new Date)})}}]).controller("ModalInstanceCtrl",["$scope",function(o,e){o.ok=function(){},o.cancel=function(){e.dismiss("cancel")}}]),angular.module("loyal3UIApp.directives",[]).directive("appVersion",["version",function(o){return function(e,l){l.text(o)}}]),angular.module("loyal3UIApp.filters",[]).filter("interpolate",["version",function(o){return function(e){return String(e).replace(/\%VERSION\%/gm,o)}}]),angular.module("loyal3UIApp.services",[]).value("version","0.1"),angular.module("loyal3UIApp.services",[]).value("version","0.1"),angular.module("loyal3UIApp.services",[]).value("version","0.1");
'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('loyal3UIApp.services', []).
  value('version', '0.1');

"use strict";angular.module("loyal3UIApp",["ui.bootstrap","ngRoute","loyal3UIApp.filters","loyal3UIApp.services","loyal3UIApp.directives","loyal3UIApp.controllers"]).config(["$routeProvider","$locationProvider",function(o,e){e.html5Mode(!0),o.when("/",{templateUrl:"/pages/home.html",controller:"HomeController"}).when("/view/home",{templateUrl:"/pages/home.html",controller:"HomeController"}).when("/view/section",{templateUrl:"/pages/section.html",controller:"SectionController"}).when("/view/404",{templateUrl:"/pages/notfound.html",controller:"NotFoundController"}).otherwise({redirectTo:"/view/404"})}]),angular.module("loyal3UIApp.controllers",[]).controller("MainController",["$scope","$log","$location",function(o){o.message="Check Out the Main Controller!"}]).controller("HomeController",["$rootScope","$scope",function(o,e){o.pageTitle="Homepage",e.message="This is the Home Page!"}]).controller("SectionController",["$rootScope","$scope",function(o,e){o.pageTitle="Section Title",e.message="This is some random section page!"}]).controller("NotFoundController",["$rootScope","$scope",function(o,e){o.pageTitle="Not Found!",e.message="Page Not Found!"}]).controller("ModalCtrl",["$scope","$modal","$log",function(o,e,l){o.open=function(t){t=t?t:"generic",l.info(e),l.info(o);var n=e.open({controller:"ModalInstanceCtrl",templateUrl:"/partials/modals/"+t+".html"});n.result.then(function(){},function(){l.info("Modal dismissed at: "+new Date)})}}]).controller("ModalInstanceCtrl",["$scope",function(o,e){o.ok=function(){},o.cancel=function(){e.dismiss("cancel")}}]),angular.module("loyal3UIApp.directives",[]).directive("appVersion",["version",function(o){return function(e,l){l.text(o)}}]),angular.module("loyal3UIApp.filters",[]).filter("interpolate",["version",function(o){return function(e){return String(e).replace(/\%VERSION\%/gm,o)}}]),angular.module("loyal3UIApp",["ui.bootstrap","ngRoute","loyal3UIApp.filters","loyal3UIApp.services","loyal3UIApp.directives","loyal3UIApp.controllers"]).config(["$routeProvider","$locationProvider",function(o,e){e.html5Mode(!0),o.when("/",{templateUrl:"/pages/home.html",controller:"HomeController"}).when("/view/home",{templateUrl:"/pages/home.html",controller:"HomeController"}).when("/view/section",{templateUrl:"/pages/section.html",controller:"SectionController"}).when("/view/404",{templateUrl:"/pages/notfound.html",controller:"NotFoundController"}).otherwise({redirectTo:"/view/404"})}]),angular.module("loyal3UIApp.controllers",[]).controller("MainController",["$scope","$log","$location",function(o){o.message="Check Out the Main Controller!"}]).controller("HomeController",["$rootScope","$scope",function(o,e){o.pageTitle="Homepage",e.message="This is the Home Page!"}]).controller("SectionController",["$rootScope","$scope",function(o,e){o.pageTitle="Section Title",e.message="This is some random section page!"}]).controller("NotFoundController",["$rootScope","$scope",function(o,e){o.pageTitle="Not Found!",e.message="Page Not Found!"}]).controller("ModalCtrl",["$scope","$modal","$log",function(o,e,l){o.open=function(t){t=t?t:"generic",l.info(e),l.info(o);var n=e.open({controller:"ModalInstanceCtrl",templateUrl:"/partials/modals/"+t+".html"});n.result.then(function(){},function(){l.info("Modal dismissed at: "+new Date)})}}]).controller("ModalInstanceCtrl",["$scope",function(o,e){o.ok=function(){},o.cancel=function(){e.dismiss("cancel")}}]),angular.module("loyal3UIApp.directives",[]).directive("appVersion",["version",function(o){return function(e,l){l.text(o)}}]),angular.module("loyal3UIApp.filters",[]).filter("interpolate",["version",function(o){return function(e){return String(e).replace(/\%VERSION\%/gm,o)}}]),angular.module("loyal3UIApp",["ui.bootstrap","ngRoute","loyal3UIApp.filters","loyal3UIApp.services","loyal3UIApp.directives","loyal3UIApp.controllers"]).config(["$routeProvider","$locationProvider",function(o,e){e.html5Mode(!0),o.when("/",{templateUrl:"/pages/home.html",controller:"HomeController"}).when("/view/home",{templateUrl:"/pages/home.html",controller:"HomeController"}).when("/view/section",{templateUrl:"/pages/section.html",controller:"SectionController"}).when("/view/404",{templateUrl:"/pages/notfound.html",controller:"NotFoundController"}).otherwise({redirectTo:"/view/404"})}]),angular.module("loyal3UIApp.controllers",[]).controller("MainController",["$scope","$log","$location",function(o){o.message="Check Out the Main Controller!"}]).controller("HomeController",["$rootScope","$scope",function(o,e){o.pageTitle="Homepage",e.message="This is the Home Page!"}]).controller("SectionController",["$rootScope","$scope",function(o,e){o.pageTitle="Section Title",e.message="This is some random section page!"}]).controller("NotFoundController",["$rootScope","$scope",function(o,e){o.pageTitle="Not Found!",e.message="Page Not Found!"}]).controller("ModalCtrl",["$scope","$modal","$log",function(o,e,l){o.open=function(t){t=t?t:"generic",l.info(e),l.info(o);var n=e.open({controller:"ModalInstanceCtrl",templateUrl:"/partials/modals/"+t+".html"});n.result.then(function(){},function(){l.info("Modal dismissed at: "+new Date)})}}]).controller("ModalInstanceCtrl",["$scope",function(o,e){o.ok=function(){},o.cancel=function(){e.dismiss("cancel")}}]),angular.module("loyal3UIApp.directives",[]).directive("appVersion",["version",function(o){return function(e,l){l.text(o)}}]),angular.module("loyal3UIApp.filters",[]).filter("interpolate",["version",function(o){return function(e){return String(e).replace(/\%VERSION\%/gm,o)}}]),angular.module("loyal3UIApp",["ui.bootstrap","ngRoute","loyal3UIApp.filters","loyal3UIApp.services","loyal3UIApp.directives","loyal3UIApp.controllers"]).config(["$routeProvider","$locationProvider",function(o,e){e.html5Mode(!0),o.when("/",{templateUrl:"/pages/home.html",controller:"HomeController"}).when("/view/home",{templateUrl:"/pages/home.html",controller:"HomeController"}).when("/view/section",{templateUrl:"/pages/section.html",controller:"SectionController"}).when("/view/404",{templateUrl:"/pages/notfound.html",controller:"NotFoundController"}).otherwise({redirectTo:"/view/404"})}]),angular.module("loyal3UIApp.controllers",[]).controller("MainController",["$scope","$log","$location",function(o){o.message="Check Out the Main Controller!"}]).controller("HomeController",["$rootScope","$scope",function(o,e){o.pageTitle="Homepage",e.message="This is the Home Page!"}]).controller("SectionController",["$rootScope","$scope",function(o,e){o.pageTitle="Section Title",e.message="This is some random section page!"}]).controller("NotFoundController",["$rootScope","$scope",function(o,e){o.pageTitle="Not Found!",e.message="Page Not Found!"}]).controller("ModalCtrl",["$scope","$modal","$log",function(o,e,l){o.open=function(t){t=t?t:"generic",l.info(e),l.info(o);var n=e.open({controller:"ModalInstanceCtrl",templateUrl:"/partials/modals/"+t+".html"});n.result.then(function(){},function(){l.info("Modal dismissed at: "+new Date)})}}]).controller("ModalInstanceCtrl",["$scope",function(o,e){o.ok=function(){},o.cancel=function(){e.dismiss("cancel")}}]),angular.module("loyal3UIApp.directives",[]).directive("appVersion",["version",function(o){return function(e,l){l.text(o)}}]),angular.module("loyal3UIApp.filters",[]).filter("interpolate",["version",function(o){return function(e){return String(e).replace(/\%VERSION\%/gm,o)}}]),angular.module("loyal3UIApp.services",[]).value("version","0.1"),angular.module("loyal3UIApp",["ui.bootstrap","ngRoute","loyal3UIApp.filters","loyal3UIApp.services","loyal3UIApp.directives","loyal3UIApp.controllers"]).config(["$routeProvider","$locationProvider",function(o,e){e.html5Mode(!0),o.when("/",{templateUrl:"/pages/home.html",controller:"HomeController"}).when("/view/home",{templateUrl:"/pages/home.html",controller:"HomeController"}).when("/view/section",{templateUrl:"/pages/section.html",controller:"SectionController"}).when("/view/404",{templateUrl:"/pages/notfound.html",controller:"NotFoundController"}).otherwise({redirectTo:"/view/404"})}]),angular.module("loyal3UIApp.controllers",[]).controller("MainController",["$scope","$log","$location",function(o){o.message="Check Out the Main Controller!"}]).controller("HomeController",["$rootScope","$scope",function(o,e){o.pageTitle="Homepage",e.message="This is the Home Page!"}]).controller("SectionController",["$rootScope","$scope",function(o,e){o.pageTitle="Section Title",e.message="This is some random section page!"}]).controller("NotFoundController",["$rootScope","$scope",function(o,e){o.pageTitle="Not Found!",e.message="Page Not Found!"}]).controller("ModalCtrl",["$scope","$modal","$log",function(o,e,l){o.open=function(t){t=t?t:"generic",l.info(e),l.info(o);var n=e.open({controller:"ModalInstanceCtrl",templateUrl:"/partials/modals/"+t+".html"});n.result.then(function(){},function(){l.info("Modal dismissed at: "+new Date)})}}]).controller("ModalInstanceCtrl",["$scope",function(o,e){o.ok=function(){},o.cancel=function(){e.dismiss("cancel")}}]),angular.module("loyal3UIApp.directives",[]).directive("appVersion",["version",function(o){return function(e,l){l.text(o)}}]),angular.module("loyal3UIApp.filters",[]).filter("interpolate",["version",function(o){return function(e){return String(e).replace(/\%VERSION\%/gm,o)}}]),angular.module("loyal3UIApp.services",[]).value("version","0.1"),angular.module("loyal3UIApp.services",[]).value("version","0.1"),angular.module("loyal3UIApp",["ui.bootstrap","ngRoute","loyal3UIApp.filters","loyal3UIApp.services","loyal3UIApp.directives","loyal3UIApp.controllers"]).config(["$routeProvider","$locationProvider",function(o,e){e.html5Mode(!0),o.when("/",{templateUrl:"/pages/home.html",controller:"HomeController"}).when("/view/home",{templateUrl:"/pages/home.html",controller:"HomeController"}).when("/view/section",{templateUrl:"/pages/section.html",controller:"SectionController"}).when("/view/404",{templateUrl:"/pages/notfound.html",controller:"NotFoundController"}).otherwise({redirectTo:"/view/404"})}]),angular.module("loyal3UIApp.controllers",[]).controller("MainController",["$scope","$log","$location",function(o){o.message="Check Out the Main Controller!"}]).controller("HomeController",["$rootScope","$scope",function(o,e){o.pageTitle="Homepage",e.message="This is the Home Page!"}]).controller("SectionController",["$rootScope","$scope",function(o,e){o.pageTitle="Section Title",e.message="This is some random section page!"}]).controller("NotFoundController",["$rootScope","$scope",function(o,e){o.pageTitle="Not Found!",e.message="Page Not Found!"}]).controller("ModalCtrl",["$scope","$modal","$log",function(o,e,l){o.open=function(t){t=t?t:"generic",l.info(e),l.info(o);var n=e.open({controller:"ModalInstanceCtrl",templateUrl:"/partials/modals/"+t+".html"});n.result.then(function(){},function(){l.info("Modal dismissed at: "+new Date)})}}]).controller("ModalInstanceCtrl",["$scope",function(o,e){o.ok=function(){},o.cancel=function(){e.dismiss("cancel")}}]),angular.module("loyal3UIApp.directives",[]).directive("appVersion",["version",function(o){return function(e,l){l.text(o)}}]),angular.module("loyal3UIApp.filters",[]).filter("interpolate",["version",function(o){return function(e){return String(e).replace(/\%VERSION\%/gm,o)}}]),angular.module("loyal3UIApp",["ui.bootstrap","ngRoute","loyal3UIApp.filters","loyal3UIApp.services","loyal3UIApp.directives","loyal3UIApp.controllers"]).config(["$routeProvider","$locationProvider",function(o,e){e.html5Mode(!0),o.when("/",{templateUrl:"/pages/home.html",controller:"HomeController"}).when("/view/home",{templateUrl:"/pages/home.html",controller:"HomeController"}).when("/view/section",{templateUrl:"/pages/section.html",controller:"SectionController"}).when("/view/404",{templateUrl:"/pages/notfound.html",controller:"NotFoundController"}).otherwise({redirectTo:"/view/404"})}]),angular.module("loyal3UIApp.controllers",[]).controller("MainController",["$scope","$log","$location",function(o){o.message="Check Out the Main Controller!"}]).controller("HomeController",["$rootScope","$scope",function(o,e){o.pageTitle="Homepage",e.message="This is the Home Page!"}]).controller("SectionController",["$rootScope","$scope",function(o,e){o.pageTitle="Section Title",e.message="This is some random section page!"}]).controller("NotFoundController",["$rootScope","$scope",function(o,e){o.pageTitle="Not Found!",e.message="Page Not Found!"}]).controller("ModalCtrl",["$scope","$modal","$log",function(o,e,l){o.open=function(t){t=t?t:"generic",l.info(e),l.info(o);var n=e.open({controller:"ModalInstanceCtrl",templateUrl:"/partials/modals/"+t+".html"});n.result.then(function(){},function(){l.info("Modal dismissed at: "+new Date)})}}]).controller("ModalInstanceCtrl",["$scope",function(o,e){o.ok=function(){},o.cancel=function(){e.dismiss("cancel")}}]),angular.module("loyal3UIApp.directives",[]).directive("appVersion",["version",function(o){return function(e,l){l.text(o)}}]),angular.module("loyal3UIApp.filters",[]).filter("interpolate",["version",function(o){return function(e){return String(e).replace(/\%VERSION\%/gm,o)}}]),angular.module("loyal3UIApp.services",[]).value("version","0.1"),angular.module("loyal3UIApp",["ui.bootstrap","ngRoute","loyal3UIApp.filters","loyal3UIApp.services","loyal3UIApp.directives","loyal3UIApp.controllers"]).config(["$routeProvider","$locationProvider",function(o,e){e.html5Mode(!0),o.when("/",{templateUrl:"/pages/home.html",controller:"HomeController"}).when("/view/home",{templateUrl:"/pages/home.html",controller:"HomeController"}).when("/view/section",{templateUrl:"/pages/section.html",controller:"SectionController"}).when("/view/404",{templateUrl:"/pages/notfound.html",controller:"NotFoundController"}).otherwise({redirectTo:"/view/404"})}]),angular.module("loyal3UIApp.controllers",[]).controller("MainController",["$scope","$log","$location",function(o){o.message="Check Out the Main Controller!"}]).controller("HomeController",["$rootScope","$scope",function(o,e){o.pageTitle="Homepage",e.message="This is the Home Page!"}]).controller("SectionController",["$rootScope","$scope",function(o,e){o.pageTitle="Section Title",e.message="This is some random section page!"}]).controller("NotFoundController",["$rootScope","$scope",function(o,e){o.pageTitle="Not Found!",e.message="Page Not Found!"}]).controller("ModalCtrl",["$scope","$modal","$log",function(o,e,l){o.open=function(t){t=t?t:"generic",l.info(e),l.info(o);var n=e.open({controller:"ModalInstanceCtrl",templateUrl:"/partials/modals/"+t+".html"});n.result.then(function(){},function(){l.info("Modal dismissed at: "+new Date)})}}]).controller("ModalInstanceCtrl",["$scope",function(o,e){o.ok=function(){},o.cancel=function(){e.dismiss("cancel")}}]),angular.module("loyal3UIApp.directives",[]).directive("appVersion",["version",function(o){return function(e,l){l.text(o)}}]),angular.module("loyal3UIApp.filters",[]).filter("interpolate",["version",function(o){return function(e){return String(e).replace(/\%VERSION\%/gm,o)}}]),angular.module("loyal3UIApp.services",[]).value("version","0.1"),angular.module("loyal3UIApp.services",[]).value("version","0.1"),angular.module("loyal3UIApp.services",[]).value("version","0.1"),angular.module("loyal3UIApp",["ui.bootstrap","ngRoute","loyal3UIApp.filters","loyal3UIApp.services","loyal3UIApp.directives","loyal3UIApp.controllers"]).config(["$routeProvider","$locationProvider",function(o,e){e.html5Mode(!0),o.when("/",{templateUrl:"/pages/home.html",controller:"HomeController"}).when("/view/home",{templateUrl:"/pages/home.html",controller:"HomeController"}).when("/view/section",{templateUrl:"/pages/section.html",controller:"SectionController"}).when("/view/404",{templateUrl:"/pages/notfound.html",controller:"NotFoundController"}).otherwise({redirectTo:"/view/404"})}]),angular.module("loyal3UIApp.controllers",[]).controller("MainController",["$scope","$log","$location",function(o){o.message="Check Out the Main Controller!"}]).controller("HomeController",["$rootScope","$scope",function(o,e){o.pageTitle="Homepage",e.message="This is the Home Page!"}]).controller("SectionController",["$rootScope","$scope",function(o,e){o.pageTitle="Section Title",e.message="This is some random section page!"}]).controller("NotFoundController",["$rootScope","$scope",function(o,e){o.pageTitle="Not Found!",e.message="Page Not Found!"}]).controller("ModalCtrl",["$scope","$modal","$log",function(o,e,l){o.open=function(t){t=t?t:"generic",l.info(e),l.info(o);var n=e.open({controller:"ModalInstanceCtrl",templateUrl:"/partials/modals/"+t+".html"});n.result.then(function(){},function(){l.info("Modal dismissed at: "+new Date)})}}]).controller("ModalInstanceCtrl",["$scope",function(o,e){o.ok=function(){},o.cancel=function(){e.dismiss("cancel")}}]),angular.module("loyal3UIApp.directives",[]).directive("appVersion",["version",function(o){return function(e,l){l.text(o)}}]),angular.module("loyal3UIApp.filters",[]).filter("interpolate",["version",function(o){return function(e){return String(e).replace(/\%VERSION\%/gm,o)}}]),angular.module("loyal3UIApp",["ui.bootstrap","ngRoute","loyal3UIApp.filters","loyal3UIApp.services","loyal3UIApp.directives","loyal3UIApp.controllers"]).config(["$routeProvider","$locationProvider",function(o,e){e.html5Mode(!0),o.when("/",{templateUrl:"/pages/home.html",controller:"HomeController"}).when("/view/home",{templateUrl:"/pages/home.html",controller:"HomeController"}).when("/view/section",{templateUrl:"/pages/section.html",controller:"SectionController"}).when("/view/404",{templateUrl:"/pages/notfound.html",controller:"NotFoundController"}).otherwise({redirectTo:"/view/404"})}]),angular.module("loyal3UIApp.controllers",[]).controller("MainController",["$scope","$log","$location",function(o){o.message="Check Out the Main Controller!"}]).controller("HomeController",["$rootScope","$scope",function(o,e){o.pageTitle="Homepage",e.message="This is the Home Page!"}]).controller("SectionController",["$rootScope","$scope",function(o,e){o.pageTitle="Section Title",e.message="This is some random section page!"}]).controller("NotFoundController",["$rootScope","$scope",function(o,e){o.pageTitle="Not Found!",e.message="Page Not Found!"}]).controller("ModalCtrl",["$scope","$modal","$log",function(o,e,l){o.open=function(t){t=t?t:"generic",l.info(e),l.info(o);var n=e.open({controller:"ModalInstanceCtrl",templateUrl:"/partials/modals/"+t+".html"});n.result.then(function(){},function(){l.info("Modal dismissed at: "+new Date)})}}]).controller("ModalInstanceCtrl",["$scope",function(o,e){o.ok=function(){},o.cancel=function(){e.dismiss("cancel")}}]),angular.module("loyal3UIApp.directives",[]).directive("appVersion",["version",function(o){return function(e,l){l.text(o)}}]),angular.module("loyal3UIApp.filters",[]).filter("interpolate",["version",function(o){return function(e){return String(e).replace(/\%VERSION\%/gm,o)}}]),angular.module("loyal3UIApp",["ui.bootstrap","ngRoute","loyal3UIApp.filters","loyal3UIApp.services","loyal3UIApp.directives","loyal3UIApp.controllers"]).config(["$routeProvider","$locationProvider",function(o,e){e.html5Mode(!0),o.when("/",{templateUrl:"/pages/home.html",controller:"HomeController"}).when("/view/home",{templateUrl:"/pages/home.html",controller:"HomeController"}).when("/view/section",{templateUrl:"/pages/section.html",controller:"SectionController"}).when("/view/404",{templateUrl:"/pages/notfound.html",controller:"NotFoundController"}).otherwise({redirectTo:"/view/404"})}]),angular.module("loyal3UIApp.controllers",[]).controller("MainController",["$scope","$log","$location",function(o){o.message="Check Out the Main Controller!"}]).controller("HomeController",["$rootScope","$scope",function(o,e){o.pageTitle="Homepage",e.message="This is the Home Page!"}]).controller("SectionController",["$rootScope","$scope",function(o,e){o.pageTitle="Section Title",e.message="This is some random section page!"}]).controller("NotFoundController",["$rootScope","$scope",function(o,e){o.pageTitle="Not Found!",e.message="Page Not Found!"}]).controller("ModalCtrl",["$scope","$modal","$log",function(o,e,l){o.open=function(t){t=t?t:"generic",l.info(e),l.info(o);var n=e.open({controller:"ModalInstanceCtrl",templateUrl:"/partials/modals/"+t+".html"});n.result.then(function(){},function(){l.info("Modal dismissed at: "+new Date)})}}]).controller("ModalInstanceCtrl",["$scope",function(o,e){o.ok=function(){},o.cancel=function(){e.dismiss("cancel")}}]),angular.module("loyal3UIApp.directives",[]).directive("appVersion",["version",function(o){return function(e,l){l.text(o)}}]),angular.module("loyal3UIApp.filters",[]).filter("interpolate",["version",function(o){return function(e){return String(e).replace(/\%VERSION\%/gm,o)}}]),angular.module("loyal3UIApp.services",[]).value("version","0.1"),angular.module("loyal3UIApp",["ui.bootstrap","ngRoute","loyal3UIApp.filters","loyal3UIApp.services","loyal3UIApp.directives","loyal3UIApp.controllers"]).config(["$routeProvider","$locationProvider",function(o,e){e.html5Mode(!0),o.when("/",{templateUrl:"/pages/home.html",controller:"HomeController"}).when("/view/home",{templateUrl:"/pages/home.html",controller:"HomeController"}).when("/view/section",{templateUrl:"/pages/section.html",controller:"SectionController"}).when("/view/404",{templateUrl:"/pages/notfound.html",controller:"NotFoundController"}).otherwise({redirectTo:"/view/404"})}]),angular.module("loyal3UIApp.controllers",[]).controller("MainController",["$scope","$log","$location",function(o){o.message="Check Out the Main Controller!"}]).controller("HomeController",["$rootScope","$scope",function(o,e){o.pageTitle="Homepage",e.message="This is the Home Page!"}]).controller("SectionController",["$rootScope","$scope",function(o,e){o.pageTitle="Section Title",e.message="This is some random section page!"}]).controller("NotFoundController",["$rootScope","$scope",function(o,e){o.pageTitle="Not Found!",e.message="Page Not Found!"}]).controller("ModalCtrl",["$scope","$modal","$log",function(o,e,l){o.open=function(t){t=t?t:"generic",l.info(e),l.info(o);var n=e.open({controller:"ModalInstanceCtrl",templateUrl:"/partials/modals/"+t+".html"});n.result.then(function(){},function(){l.info("Modal dismissed at: "+new Date)})}}]).controller("ModalInstanceCtrl",["$scope",function(o,e){o.ok=function(){},o.cancel=function(){e.dismiss("cancel")}}]),angular.module("loyal3UIApp.directives",[]).directive("appVersion",["version",function(o){return function(e,l){l.text(o)}}]),angular.module("loyal3UIApp.filters",[]).filter("interpolate",["version",function(o){return function(e){return String(e).replace(/\%VERSION\%/gm,o)}}]),angular.module("loyal3UIApp.services",[]).value("version","0.1"),angular.module("loyal3UIApp.services",[]).value("version","0.1"),angular.module("loyal3UIApp",["ui.bootstrap","ngRoute","loyal3UIApp.filters","loyal3UIApp.services","loyal3UIApp.directives","loyal3UIApp.controllers"]).config(["$routeProvider","$locationProvider",function(o,e){e.html5Mode(!0),o.when("/",{templateUrl:"/pages/home.html",controller:"HomeController"}).when("/view/home",{templateUrl:"/pages/home.html",controller:"HomeController"}).when("/view/section",{templateUrl:"/pages/section.html",controller:"SectionController"}).when("/view/404",{templateUrl:"/pages/notfound.html",controller:"NotFoundController"}).otherwise({redirectTo:"/view/404"})}]),angular.module("loyal3UIApp.controllers",[]).controller("MainController",["$scope","$log","$location",function(o){o.message="Check Out the Main Controller!"}]).controller("HomeController",["$rootScope","$scope",function(o,e){o.pageTitle="Homepage",e.message="This is the Home Page!"}]).controller("SectionController",["$rootScope","$scope",function(o,e){o.pageTitle="Section Title",e.message="This is some random section page!"}]).controller("NotFoundController",["$rootScope","$scope",function(o,e){o.pageTitle="Not Found!",e.message="Page Not Found!"}]).controller("ModalCtrl",["$scope","$modal","$log",function(o,e,l){o.open=function(t){t=t?t:"generic",l.info(e),l.info(o);var n=e.open({controller:"ModalInstanceCtrl",templateUrl:"/partials/modals/"+t+".html"});n.result.then(function(){},function(){l.info("Modal dismissed at: "+new Date)})}}]).controller("ModalInstanceCtrl",["$scope",function(o,e){o.ok=function(){},o.cancel=function(){e.dismiss("cancel")}}]),angular.module("loyal3UIApp.directives",[]).directive("appVersion",["version",function(o){return function(e,l){l.text(o)}}]),angular.module("loyal3UIApp.filters",[]).filter("interpolate",["version",function(o){return function(e){return String(e).replace(/\%VERSION\%/gm,o)}}]),angular.module("loyal3UIApp",["ui.bootstrap","ngRoute","loyal3UIApp.filters","loyal3UIApp.services","loyal3UIApp.directives","loyal3UIApp.controllers"]).config(["$routeProvider","$locationProvider",function(o,e){e.html5Mode(!0),o.when("/",{templateUrl:"/pages/home.html",controller:"HomeController"}).when("/view/home",{templateUrl:"/pages/home.html",controller:"HomeController"}).when("/view/section",{templateUrl:"/pages/section.html",controller:"SectionController"}).when("/view/404",{templateUrl:"/pages/notfound.html",controller:"NotFoundController"}).otherwise({redirectTo:"/view/404"})}]),angular.module("loyal3UIApp.controllers",[]).controller("MainController",["$scope","$log","$location",function(o){o.message="Check Out the Main Controller!"}]).controller("HomeController",["$rootScope","$scope",function(o,e){o.pageTitle="Homepage",e.message="This is the Home Page!"}]).controller("SectionController",["$rootScope","$scope",function(o,e){o.pageTitle="Section Title",e.message="This is some random section page!"}]).controller("NotFoundController",["$rootScope","$scope",function(o,e){o.pageTitle="Not Found!",e.message="Page Not Found!"}]).controller("ModalCtrl",["$scope","$modal","$log",function(o,e,l){o.open=function(t){t=t?t:"generic",l.info(e),l.info(o);var n=e.open({controller:"ModalInstanceCtrl",templateUrl:"/partials/modals/"+t+".html"});n.result.then(function(){},function(){l.info("Modal dismissed at: "+new Date)})}}]).controller("ModalInstanceCtrl",["$scope",function(o,e){o.ok=function(){},o.cancel=function(){e.dismiss("cancel")}}]),angular.module("loyal3UIApp.directives",[]).directive("appVersion",["version",function(o){return function(e,l){l.text(o)}}]),angular.module("loyal3UIApp.filters",[]).filter("interpolate",["version",function(o){return function(e){return String(e).replace(/\%VERSION\%/gm,o)}}]),angular.module("loyal3UIApp.services",[]).value("version","0.1"),angular.module("loyal3UIApp",["ui.bootstrap","ngRoute","loyal3UIApp.filters","loyal3UIApp.services","loyal3UIApp.directives","loyal3UIApp.controllers"]).config(["$routeProvider","$locationProvider",function(o,e){e.html5Mode(!0),o.when("/",{templateUrl:"/pages/home.html",controller:"HomeController"}).when("/view/home",{templateUrl:"/pages/home.html",controller:"HomeController"}).when("/view/section",{templateUrl:"/pages/section.html",controller:"SectionController"}).when("/view/404",{templateUrl:"/pages/notfound.html",controller:"NotFoundController"}).otherwise({redirectTo:"/view/404"})}]),angular.module("loyal3UIApp.controllers",[]).controller("MainController",["$scope","$log","$location",function(o){o.message="Check Out the Main Controller!"}]).controller("HomeController",["$rootScope","$scope",function(o,e){o.pageTitle="Homepage",e.message="This is the Home Page!"}]).controller("SectionController",["$rootScope","$scope",function(o,e){o.pageTitle="Section Title",e.message="This is some random section page!"}]).controller("NotFoundController",["$rootScope","$scope",function(o,e){o.pageTitle="Not Found!",e.message="Page Not Found!"}]).controller("ModalCtrl",["$scope","$modal","$log",function(o,e,l){o.open=function(t){t=t?t:"generic",l.info(e),l.info(o);var n=e.open({controller:"ModalInstanceCtrl",templateUrl:"/partials/modals/"+t+".html"});n.result.then(function(){},function(){l.info("Modal dismissed at: "+new Date)})}}]).controller("ModalInstanceCtrl",["$scope",function(o,e){o.ok=function(){},o.cancel=function(){e.dismiss("cancel")}}]),angular.module("loyal3UIApp.directives",[]).directive("appVersion",["version",function(o){return function(e,l){l.text(o)}}]),angular.module("loyal3UIApp.filters",[]).filter("interpolate",["version",function(o){return function(e){return String(e).replace(/\%VERSION\%/gm,o)}}]),angular.module("loyal3UIApp.services",[]).value("version","0.1"),angular.module("loyal3UIApp.services",[]).value("version","0.1"),angular.module("loyal3UIApp.services",[]).value("version","0.1"),angular.module("loyal3UIApp.services",[]).value("version","0.1");
'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('loyal3UIApp.services', []).
  value('version', '0.1');
