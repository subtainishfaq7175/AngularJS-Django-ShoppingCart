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

      .state('details', {
            url: '/details',
            parent: 'dashboard',
            controller: 'DetailsCtrl',
            templateUrl: 'private/details/details.html'
          })

      .state('receipt', {
            url: '/receipt',
            parent: 'dashboard',
            controller: 'ReceiptCtrl',
            templateUrl: 'private/receipt/receipt.html'
          })
      .state('addproduct', {
            url: '/addproduct',
            parent: 'dashboard',
            controller: 'AddproductCtrl',
            templateUrl: 'private/addProduct/addProduct.html'
          })


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


      var publicPages = ['login','signup','receipt','details'];
      var restrictedPage = publicPages.indexOf(toState.name) === -1;
      if (restrictedPage && !$localStorage.currentUser) {
        $state.go('login');
      }


    });



  $rootScope.$on('$stateChangeSuccess',function(){
    $rootScope.scopeWorkingVariable=false;

  });

}
