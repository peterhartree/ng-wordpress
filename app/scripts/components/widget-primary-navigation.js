'use strict';

angular.module('ngWordPressApp.components.primaryNavigation', [])

.directive('primaryNavigation', function($location){
  return {
    restrict: 'E',
    templateUrl: 'views/widgets/primary-navigation.html',
    link: function(scope) {
      scope.isActive = function(path) {
        if ($location.path() === path) {
          return true;
        }
        return false;
      };
    }
  };
});