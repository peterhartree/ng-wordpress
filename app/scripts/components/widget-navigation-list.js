'use strict';

angular.module('ngWordPressApp.components.navigationList', [])

.directive('navbar', function($location){
  return {
    restrict: 'E',
    templateUrl: 'views/widgets/navigation-list.html',
    link: function(scope) {
      var navItems = [
        {
          'href' : '/',
          'label' : 'Home'
        },
        {
          'href' : '/sample-page/',
          'label' : 'Sample page'
        },
        {
          'href' : '/posts/',
          'label' : 'Posts archive'
        },
        {
          'href' : '/post/hello-world/',
          'label' : 'Single post'
        }
      ];

      scope.navItems = navItems;

      scope.isActive = function(path) {
        if ($location.path() === path) {
          return true;
        }
        return false;
      };
    }
  };
});