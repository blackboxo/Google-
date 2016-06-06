// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js,
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngCordova','ng-mfb'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    //使得导航栏在不同平台中适配标准
    $ionicConfigProvider.platform.ios.tabs.style('standard');
    $ionicConfigProvider.platform.ios.tabs.position('bottom');
    $ionicConfigProvider.platform.android.tabs.style('standard');
    $ionicConfigProvider.platform.android.tabs.position('bottom');

    $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
    $ionicConfigProvider.platform.android.navBar.alignTitle('center');


    $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
    $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

    $ionicConfigProvider.platform.ios.views.transition('ios');
    $ionicConfigProvider.platform.android.views.transition('android');

    $ionicConfigProvider.views.maxCache(0);
    $ionicConfigProvider.backButton.icon('ion-ios-arrow-left');

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
      .state('main', {
        url: '/main',
        abstract: true,
        templateUrl: 'templates/MainRoot.html'
      })

      // Each tab has its own nav history stack:

      .state('login', {
        url: '/login',
        templateUrl: 'templates/Login.tpl.html',
        controller: 'LoginCtrl'
      })

      .state('signup', {
        url: '/signup',
        templateUrl: 'templates/sign_up.html',
        controller: 'Sign_upCtrl'
      })

      .state('main.home', {
        url: '/home',
        views: {
          'tab-home': {
            templateUrl: 'templates/main.home.html',
            controller: 'homeCtrl'
          }
        }
      })

      .state('main.post-detail', {
        url: '/home/:postId',
        views: {
          'tab-home': {
            templateUrl: 'templates/post-detail.html',
            controller: 'postDetailCtrl'
          }
        }
      })

      .state('main.post-write', {
        url: '/write',
        views: {
          'tab-home': {
            templateUrl: 'templates/post-write.html',
            controller: 'postWriteCtrl'
          }
        }
      })

      .state('main.categories', {
        url: '/categories',
        views: {
          'tab-categories': {
            templateUrl: 'templates/main.categories.html',
            controller: 'categoriesCtrl'
          }
        }
      })

      .state('main.category-detail', {
        url: '/categories/:categoryId',
        views: {
          'tab-categories': {
            templateUrl: 'templates/category-detail.html',
            controller: 'categoryDetailCtrl'
          }
        }
      })


      .state('main.chats', {
        url: '/chats',
        views: {
          'tab-chats': {
            templateUrl: 'templates/main.chats.html',
            controller: 'chatsCtrl'
          }
        }
      })

      .state('main.chat-detail', {
        url: '/chats/:chatId',
        views: {
          'tab-chats': {
            templateUrl: 'templates/chat-detail.html',
            controller: 'chatDetailCtrl'
          }
        }
      })

      .state('main.account', {
        url: '/account',
        views: {
          'tab-account': {
            templateUrl: 'templates/main.account.html',
            controller: 'accountCtrl'
          }
        }
      })


    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login');

  })
  .directive('hideTabs', function ($rootScope) {
    return {
      restrict: 'A',
      link: function (scope, element, attributes) {
        scope.$on('$ionicView.beforeEnter', function () {
          scope.$watch(attributes.hideTabs, function (value) {
            $rootScope.hideTabs = value;
          });
        });

        scope.$on('$ionicView.beforeLeave', function () {
          $rootScope.hideTabs = false;
        });
      }
    };
  });

