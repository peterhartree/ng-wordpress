'use strict';

angular.module('ngWordPressApp.components.contentExcerpt', [])

.directive('contentExcerpt', function(){
  return {
    restrict: 'E',
    templateUrl: 'views/partials/content-excerpt.html'
  };
});