'use strict';

/**
 * @ngdoc function
 * @name ngWordPressApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngWordPressApp
 */
angular.module('ngWordPressApp')
  .controller('ErrorCtrl', function (WordPress, $scope, $sce, $location, State) {

    var currentState = State.get();

    currentState.then(function() {

    });

  });
