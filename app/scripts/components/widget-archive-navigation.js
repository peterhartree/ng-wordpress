'use strict';

angular.module('ngWordPressApp.components.archiveNavigation', [])

.directive('archiveNavigation', function(WordPressApi){
  return {
    restrict: 'E',
    templateUrl: 'views/widgets/archive-navigation.html',
    link: function(scope) {
      var archive = WordPressApi.getArchive('post');
      archive.then(function(archive) {
        scope.archive = archive;
      });
    }
  };
});