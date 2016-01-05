'use strict';

/**
 * @ngdoc function
 * @name ngWordPressApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngWordPressApp
 */
angular.module('ngWordPressApp')
  .controller('SingleCtrl', function (WordPressApi, $scope, $sce, State, $location) {

    var currentState = State.get();

    currentState.then(function(currentState) {

      var posts = WordPressApi.getPost(currentState.postType, currentState.slug);

      posts.then(function(posts) {

        if(posts.length === 0) {
          $location.url('/404/');
        }

        posts[0].content.rendered = $sce.trustAsHtml(posts[0].content.rendered);
        $scope.post = posts[0];
      });
    });
  });
