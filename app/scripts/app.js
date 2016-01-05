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
    'ngWordPressApp.components.archives',
    'ngWordPressApp.components.contentExcerpt',
    'ngWordPressApp.components.contentSingle',
    'ngWordPressApp.components.latestPosts',
    'ngWordPressApp.components.navigationList',
    'ngWordPressApp.components.primaryNavigation',
  ]);
