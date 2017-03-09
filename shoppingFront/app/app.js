'use strict';


angular
  .module('yapp', [
    'ui.router',
    'ngAnimate',
    'kendo.directives',
    'ngMaterial',
    'ngStorage',
    'ngSanitize',
    'angular-sortable-view',
    'ngLoader',
    'toastr'
  ])
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('/dashboard', '/dashboard/home');
    $urlRouterProvider.otherwise('/login');
    //  delete $httpProvider.defaults.headers.common["X-Requested-With"];




    $stateProvider
      .state('base', {
        abstract: true,
        url: '',
        templateUrl: 'private/views/base.html'
      })
      .state('login', {
          url: '/login',
          parent: 'base',
          templateUrl: 'public/login/login.html',
          controller: 'LoginCtrl'
        })
      .state('signup', {
          url: '/signup',
          parent: 'base',
          templateUrl: 'public/signup/signup.html',
          controller: 'SignupCtrl'
        })
      .state('dashboard', {
          url: '/dashboard',
          parent: 'base',
          templateUrl: 'private/dashboard/dashboard.html',
          controller: 'DashboardCtrl'
        })
      .state('home', {
            url: '/home',
            parent: 'dashboard',
            controller: 'HomeCtrl',
            templateUrl: 'private/home/home.html'
          })
      .state('masterdata', {
        resolve:{

          link:  function(masterdataService)
          {
            //get game here


            return masterdataService.getMasterdataByType("link");
          },
          categories:  function(masterdataService)
          {
            //get game here


            return masterdataService.getMasterdataByType("categories");
          },
          genre:  function(masterdataService)
          {
            //get game here


            return masterdataService.getMasterdataByType("genre");
          },
          language:  function(masterdataService)
          {
            //get game here


            return masterdataService.getMasterdataByType("language");
          },
          tags:  function(masterdataService)
          {
            //get game here


            return masterdataService.getMasterdataByType("tags");
          },
          linktype:  function(masterdataService)
          {
            //get game here


            return masterdataService.getMasterdataByType("linktype");
          }},

        url: '/masterdata',
            parent: 'dashboard',
            controller: 'MasterdataCtrl',
            templateUrl: 'private/masterdata/masterdata.html'
          })
      .state('news', {
            url: '/news',
            parent: 'dashboard',
            controller: 'NewsCtrl',
            templateUrl: 'private/news/news.html'
          })
      .state('newsadd', {
         url: '/newsadd',
        parent: 'dashboard',
        controller: 'NewsAddCtrl',
        templateUrl: 'private/news/add/add.html'
      })
      .state('newsedit', {
        resolve:{

          simpleObj:  function(newsService,$stateParams)
          {
            //get game here


            return newsService.getNewsById($stateParams.id);
          }},

        url: '/newsedit/:id',
        parent: 'dashboard',
        controller: 'NewsEditCtrl',
        templateUrl: 'private/news/edit/edit.html'
      })
      .state('games', {
            url: '/games',
            parent: 'dashboard',
            controller: 'GamesCtrl',
            templateUrl: 'private/games/games.html'
          })
      .state('gamesadd', {
        url: '/gamesadd',
        parent: 'dashboard',
        controller: 'GamesAddCtrl',
        templateUrl: 'private/games/add/add.html'
      })
      .state('gamesedit', {
        resolve:{

          simpleObj:  function(gamesService,$stateParams)
          {
            //get game here


            return gamesService.getGameById($stateParams.id);
          }},
        url: '/gamesedit/:id',
        parent: 'dashboard',
        controller: 'GamesEditCtrl',
        templateUrl: 'private/games/edit/edit.html'
      })
      .state('letsplay', {
            url: '/letsplay',
            parent: 'dashboard',
            controller: 'LetsplayCtrl',
            templateUrl: 'private/letsplay/letsplay.html'
          })
      .state('letsplayadd', {
        url: '/letsplayadd',
        parent: 'dashboard',
        controller: 'LetsplayAddCtrl',
        templateUrl: 'private/letsplay/add/add.html'
      })
      .state('letsplayedit', {

        resolve:{

          itemLetsplay:  function(letsplayService,$stateParams)
          {
            //get game here


            return letsplayService.getLetsplayById($stateParams.id);
          }},
        url: '/letsplayedit/:id',
        parent: 'dashboard',
        controller: 'LetsplayEditCtrl',
        templateUrl: 'private/letsplay/edit/edit.html'
      })
      .state('walkthrough', {
            url: '/walkthrough',
            parent: 'dashboard',
            controller: 'WalkthroughCtrl',
            templateUrl: 'private/walkthrough/walkthrough.html'
          })
      .state('walkthroughadd', {
        url: '/walkthroughadd',
        parent: 'dashboard',
        controller: 'WalkthroughAddCtrl',
        templateUrl: 'private/walkthrough/add/add.html'
      })
      .state('walkthroughedit', {
        resolve:{

          itemWalkthrough:  function(walkthroughService,$stateParams)
          {
            //get game here


            return walkthroughService.getWalkthroughById($stateParams.id);
          }},
        url: '/walkthroughedit/:id',
        parent: 'dashboard',
        controller: 'WalkthroughEditCtrl',
        templateUrl: 'private/walkthrough/edit/edit.html'
      })
      .state('faqs', {
            url: '/faqs',
            parent: 'dashboard',
            controller: 'FaqsCtrl',
            templateUrl: 'private/faqs/faqs.html'
          })
      .state('faqsadd', {
        url: '/faqsadd',
        parent: 'dashboard',
        controller: 'FaqsAddCtrl',
        templateUrl: 'private/faqs/add/add.html'
      })
      .state('faqsedit', {
        resolve:{

          simpleObj:  function(faqsService,$stateParams)
          {
            //get game here


            return faqsService.getFaqsById($stateParams.id);
          }},
        url: '/faqsedit/:id',
        parent: 'dashboard',
        controller: 'FaqsEditCtrl',
        templateUrl: 'private/faqs/edit/edit.html'
      })
      .state('messages', {
            url: '/messages',
            parent: 'dashboard',
            controller: 'MessagesCtrl',
            templateUrl: 'private/messages/messages.html'
          })
      .state('messagesadd', {
            url: '/messagesadd',
            parent: 'dashboard',
            controller: 'MessagesAddCtrl',
            templateUrl: 'private/messages/add/add.html'
          })
      .state('comments', {
            url: '/comments',
            parent: 'dashboard',
            controller: 'CommentsCtrl',
            templateUrl: 'private/comments/comments.html'
          })
      .state('commentsadd', {
        url: '/commentsadd',
        parent: 'dashboard',
        controller: 'CommentsAddCtrl',
        templateUrl: 'private/comments/add/add.html'
      })
      .state('profiles', {
        url: '/profiles',
        parent: 'dashboard',
        controller: 'ProfilesCtrl',
        templateUrl: 'private/profiles/profiles.html'
      })
      .state('profilesadd', {
        url: '/profilesadd',
        parent: 'dashboard',
        controller: 'ProfilesAddCtrl',
        templateUrl: 'private/profiles/add/add.html'
      })
      .state('profilesedit', {

      resolve:{

        simpleObj:  function(profilesService,$stateParams)
        {
          //get game here


          return profilesService.getProfileById($stateParams.id);
        }},

        url: '/profilesedit/:id',
        parent: 'dashboard',
        controller: 'ProfilesEditCtrl',
        templateUrl: 'private/profiles/edit/edit.html'
      });

  })
  .run(run);

function run($rootScope, $http, $state, $localStorage) {
  // keep user logged in after page refresh
  if ($localStorage.currentUser) {
    $http.defaults.headers.common.Authorization = $localStorage.currentUser.token;
  }

  // redirect to login page if not logged in and trying to access a restricted page

  $rootScope.$on('$stateChangeStart',
    function(event, toState, toParams, fromState, fromParams, options)
    {
      $rootScope.scopeMessageVariable="Loading";
      $rootScope.scopeWorkingVariable=true;


      var publicPages = ['login','signup'];
      var restrictedPage = publicPages.indexOf(toState.name) === -1;
      if (restrictedPage && !$localStorage.currentUser) {
        $state.go('login');
      }


    });



  $rootScope.$on('$stateChangeSuccess',function(){
    $rootScope.scopeWorkingVariable=false;

  });

}
