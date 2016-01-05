'use strict';

angular.module( 'ngWordPressApp')
/**
 * Provides data from WordPress API
 */
.factory('WordPressOptions', function WordPressOptions(WordPressApi) {
  var wordPressOptions = WordPressApi.getOptions();
  return wordPressOptions;
});