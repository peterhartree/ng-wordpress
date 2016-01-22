'use strict';

angular.module('ngWordPressApp.components.archiveNextPreviousPage', [])

.directive('archiveNextPreviousPage', function(WordPressApi, State, Settings){
  return {
    restrict: 'E',
    templateUrl: 'views/widgets/archive-next-previous-page.html',
    link: function(scope) {
      var postType = 'post'; // @TODO: support other post types
      var archiveMeta = WordPressApi.getArchiveMeta(postType);
      var state = State.get();

      var totalPosts = '';
      var postsPerPage = Settings.ngwp.perPage;
      var totalPages = '';
      var currentPage = '';
      var previousPageNumber = null;
      var nextPageNumber = null;
      var previousPageLink = null;
      var nextPageLink = null;

      archiveMeta.then(function(archiveMeta) {
        totalPosts = archiveMeta.published_posts;
        totalPages = Math.ceil(totalPosts / postsPerPage);

        state.then(function(state) {
          currentPage = state.page;

          if(currentPage === totalPages) {
            // we're on the last page
            nextPageNumber = currentPage - 1;
          }
          else if (currentPage === 1) {
            // we're on the first page
            previousPageNumber = 2;
          }
          else {
            // we're somewhere in between
            nextPageNumber = currentPage - 1;
            previousPageNumber = currentPage + 1;
          }

          if(nextPageNumber === 1) {
            scope.nextPageLink = '/' + postType + 's/';
          }
          else if(nextPageNumber !== null) {
            scope.nextPageLink = '/' + postType + 's/' + nextPageNumber + '/';
          }

          if(previousPageNumber !== null) {
            scope.previousPageLink = '/' + postType + 's/' + previousPageNumber + '/';
          }
        });
      });
    }
  };
});