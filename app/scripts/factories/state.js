'use strict';

angular.module( 'ngWordPressApp')
/**
 * Provides state data
 */
.factory('State', function State($location, $route, $routeParams, $q, WordPressOptions) {

  return {
    reset : function() {
      this.cache = {};
      this.cache.ready = false;
    },
    get : function(key) {
      var statePromise = $q.defer();

      var StateUpdate = this.update();

      StateUpdate.then(function(StateUpdate) {
        if(!key) {
          statePromise.resolve(StateUpdate);
        }
        else {
          statePromise.resolve(StateUpdate[key]);
        }
      });

      return statePromise.promise;
    },
    set : function(key, value) {
      this.cache[key] = value;
    },
    getBodyClass : function() {
      var bodyClass = '';
      if(this.cache.template) {
        bodyClass += ' template-' + this.cache.template;
      }
      if(this.cache.postType) {
        bodyClass += ' type-' + this.cache.postType;
      }
      if(this.cache.slug) {
        bodyClass += ' slug-' + this.cache.slug;
      }

      bodyClass = bodyClass.trim();
      bodyClass = bodyClass.toLowerCase();
      bodyClass = bodyClass.replace('ctrl', '');

      return bodyClass;
    },
    setController : function() {
      this.set('controller', $route.current.controller);
    },
    setSlug : function() {
      var slugPromise = $q.defer();

      var path = $location.path();
      var pathComponents = path.split('/');

      if($routeParams.slug) {
        this.set('slug', $routeParams.slug);
        slugPromise.resolve();
      }
      else if (this.cache.controller === 'PageCtrl' && pathComponents.length === 3) {
        // We're viewing a page with a custom template
        this.set('slug', pathComponents[1]);
        slugPromise.resolve();
      }
      else if (this.cache.controller === 'PageCtrl') {
        // We're on front page
        var self = this;
        WordPressOptions.then(function(WordPressOptions) {
          self.set('slug', WordPressOptions.front_page.page_name);
          slugPromise.resolve();
        });
      }
      else {
        slugPromise.resolve();
      }

      return slugPromise.promise;
    },
    setPage : function() {
      var path = $location.path();
      var pathComponents = path.split('/');

      if(pathComponents.length === 5 && this.cache.controller === 'ArchiveCtrl') {

        // We've got a page number
        this.set('page', parseInt(pathComponents[3]));
      }
      else if (this.cache.controller === 'ArchiveCtrl') {
        this.set('page', 1);
      }
    },
    setPostType : function() {
      var postType = '';
      var path = $location.path();
      var pathComponents = path.split('/');
      if(this.cache.controller === 'PageCtrl') {
        postType = 'pages';
      }
      else {
        postType = pathComponents[1];
      }

      // @TODO
      // Plural of taxonomy name wont always just be singular plus 's'.
      if(this.cache.controller === 'SingleCtrl') {
        postType += 's';
      }

      this.set('postType', postType);
    },
    setTemplate : function() {
      var template = $route.current.templateUrl.replace('views/', '');
      template = template.replace('.html', '');
      this.set('template', template);
    },
    update : function () {
      var statePromise = $q.defer();
      var self = this;

      this.reset();

      this.setController();
      this.setTemplate();
      this.setPostType();
      this.setPage();
      var slugPromise = this.setSlug();

      slugPromise.then(function () {
        statePromise.resolve(self.cache);
      });

      return statePromise.promise;
    }
  };

});