'use strict';

describe('Controller: StartWithCtrl', function () {

  // load the controller's module
  beforeEach(module('wtcApp'));
  beforeEach(module('socketMock'));

  var StartWithCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StartWithCtrl = $controller('StartWithCtrl', {
      $scope: scope
    });
  }));

  it('should display something', function () {
    expect(1).toEqual(1);
  });
});
