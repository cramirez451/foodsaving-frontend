// modules
import angular from "angular";
import uiRouter from "angular-ui-router";
import ngMaterial from "angular-material";
import ngCookies from "angular-cookies";
import ngAnimate from "angular-animate";
import translate from "angular-translate";
import translateStorageCookie from "angular-translate-storage-cookie";
import "angular-breadcrumb";
import angularLoadingBar from "angular-loading-bar";
import "angular-xeditable";

// config
import Common from "./common/common";
import PageComponents from "./components/pages";
import AppMaterial from "./app.material";
import AppTranslate from "./app.translate";
import AppXEditableConfig from "./app.xeditable";

// styles
import "angular-xeditable/dist/css/xeditable.css";
import "angular-loading-bar/build/loading-bar.css";
import "./loading-bar.styl";
import "normalize.css";
import "angular-material/angular-material.css";
import "./fonts/fonts";
import "./app.styl";

import breadcrumbTemplate from "./templates/breadcrumbs.html";

import mainLayout from "./layouts/main.html";
import splashLayout from "./layouts/splash.html";
import logo from "./components/_logo/logo";

angular.module("app", [
  uiRouter,
  ngMaterial,
  "xeditable",
  "ncy-angular-breadcrumb",
  angularLoadingBar,
  ngAnimate,
  ngCookies,
  translate,
  translateStorageCookie,
  Common,
  PageComponents,
  logo
]).config(($stateProvider, $locationProvider, $urlRouterProvider, $httpProvider) => {
  "ngInject";
  $locationProvider.html5Mode(false).hashPrefix("!");
  $stateProvider
    .state("main", {
      abstract: true,
      url: "",
      template: mainLayout
    })
    .state("splash", {
      abstract: true,
      url: "",
      template: splashLayout
    });
  $urlRouterProvider.otherwise("/login");
  $httpProvider.defaults.xsrfCookieName = "csrftoken";
  $httpProvider.defaults.xsrfHeaderName = "X-CSRFToken";
})
.config(AppTranslate)
.config(AppMaterial)
.config((cfpLoadingBarProvider) => {
  "ngInject";
  cfpLoadingBarProvider.includeSpinner = false;
})
.run(AppXEditableConfig)
.run(($rootScope) => {
  "ngInject";
  $rootScope.$on('$stateChangeStart',function(event, toState, toParams, fromState, fromParams){
  console.log('$stateChangeStart to '+toState.name+'- fired when the transition begins. toState,toParams : \n',toState, toParams);
});
$rootScope.$on('$stateChangeError',function(event, toState, toParams, fromState, fromParams, error){
  console.log('$stateChangeError - fired when an error occurs during transition.');
  console.log(arguments);
});
$rootScope.$on('$stateChangeSuccess',function(event, toState, toParams, fromState, fromParams){
  console.log('$stateChangeSuccess to '+toState.name+'- fired once the state transition is complete.');
});
$rootScope.$on('$viewContentLoading',function(event, viewConfig){
   console.log('$viewContentLoading - view begins loading - dom not rendered',viewConfig);
});

/* $rootScope.$on('$viewContentLoaded',function(event){
     // runs on individual scopes, so putting it in "run" doesn't work.
     console.log('$viewContentLoaded - fired after dom rendered',event);
   }); */

$rootScope.$on('$stateNotFound',function(event, unfoundState, fromState, fromParams){
  console.log('$stateNotFound '+unfoundState.to+'  - fired when a state cannot be found by its name.');
  console.log(unfoundState, fromState, fromParams);
});
})
.config(($breadcrumbProvider) => {
  "ngInject";
  $breadcrumbProvider.setOptions({
    template: breadcrumbTemplate
  });
});
