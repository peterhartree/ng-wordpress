'use strict';

angular.module('ngWordPressApp.components.archives', [])

.directive('archives', function(){
  return {
    restrict: 'E',
    scope: {
      posts: '=posts'
    },
    templateUrl: 'views/widgets/archives.html'
  };
});