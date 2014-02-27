'use strict';

describe('routes', function(){
  var route, location, rootScope, injector, httpBackend;

  beforeEach(module('loyal3UIApp'));
  beforeEach(inject(function($route, $location, $rootScope, $injector) {
    route       = $route;
    location    = $location;
    rootScope   = $rootScope;
    injector    = $injector;
    httpBackend = injector.get('$httpBackend');
  }));

  it('should test that the routes are set correctly for the root path', function() {
    httpBackend.when("GET", "/pages/home.html").respond({});

    location.path('/');
    rootScope.$digest();
    expect(route.current.templateUrl).toBe('/pages/home.html');
    expect(route.current.controller).toBe('HomeController');
  });

  it('should test that the routes are set correctly for /view/home', function() {
    httpBackend.when("GET", "/pages/home.html").respond({});

    location.path('/view/home');
    rootScope.$digest();
    expect(route.current.templateUrl).toBe('/pages/home.html');
    expect(route.current.controller).toBe('HomeController');
  });

  it('should test that the routes are set correctly for /view/section', function() {
    httpBackend.when("GET", "/pages/section.html").respond({});

    location.path('/view/section');
    rootScope.$digest();
    expect(route.current.templateUrl).toBe('/pages/section.html');
    expect(route.current.controller).toBe('SectionController');
  });

  it('should test that the routes are set correctly for /view/404', function() {
    httpBackend.when("GET", "/pages/notfound.html").respond({});

    location.path('/view/404');
    rootScope.$digest();
    expect(route.current.templateUrl).toBe('/pages/notfound.html');
    expect(route.current.controller).toBe('NotFoundController');
  });

  it('should redirect to the not found page when route is not found', function() {
    httpBackend.when("GET", "/pages/notfound.html").respond({});
    location.path('/view/thisroutedoesntexist');
    rootScope.$digest();
    expect(location.path()).toBe('/view/404')

  });
});

