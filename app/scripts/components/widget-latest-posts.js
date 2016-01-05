'use strict';

angular.module('ngWordPressApp.components.latestPosts', [])

.directive('latestPosts', function(WordPressApi){
  return {
    restrict: 'E',
    templateUrl: 'views/widgets/latest-posts.html',
    link: function(scope) {
      var params = {per_page : 3};
      var latestPosts = WordPressApi.getPosts('posts', params);
      latestPosts.then(function(latestPosts) {
        scope.latestPosts = latestPosts;
      });

    }
  };
});