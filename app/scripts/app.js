'use strict';

/**
 * @ngdoc overview
 * @name ngWordPressApp
 * @description
 * # ngWordPressApp
 *
 * Main module of the application.
 */
angular
  .module('ngWordPressApp', [
    'ngAnimate',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'viewhead',
    'angular-loading-bar',
    'angular-bind-html-compile',
    'ngWordPressApp.components.archives',
    'ngWordPressApp.components.archiveNavigation',
    'ngWordPressApp.components.archiveNextPreviousPage',
    'ngWordPressApp.components.contentExcerpt',
    'ngWordPressApp.components.contentSingle',
    'ngWordPressApp.components.latestPosts',
    'ngWordPressApp.components.latestPostsList',
    'ngWordPressApp.components.navigationList',
    'ngWordPressApp.components.primaryNavigation',
  ]);
