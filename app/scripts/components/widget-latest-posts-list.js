'use strict';

angular.module('ngWordPressApp.components.latestPostsList', [])

.directive('latestPostsList', function(WordPressApi){
  return {
    restrict: 'E',
    templateUrl: 'views/widgets/latest-posts-list.html',
    link: function(scope) {
      var params = {per_page : 5};
      var latestPostsList = WordPressApi.getPosts('posts', params);
      latestPostsList.then(function(latestPostsList) {
        scope.latestPostsList = latestPostsList;
      });

    }
  };
});