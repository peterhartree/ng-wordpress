'use strict';

angular.module('ngWordPressApp.components.contentSingle', [])

.directive('contentSingle', function(){
  return {
    restrict: 'E',
    templateUrl: 'views/partials/content-single.html'
  };
});