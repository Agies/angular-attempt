(function(angular) {
    'use strict';
    
    var app = angular.module("AngularAttempt", ["ngRoute", "kendo.directives"]);
    app.config([
                   "$routeProvider", "$sceDelegateProvider", function(routeProvider, sceDelegateProvider) {
                       sceDelegateProvider.resourceUrlWhitelist([ "**" ]);
                       routeProvider
                           .when("/", {
                                     templateUrl: "home/home.html",
                                     controller: "HomeController",
                                 })
                           .when("/login", {
                                     templateUrl: "login/login.html",
                                     controller: "LoginController",
                                 })
                           .otherwise()
                   }
               ]
        ).run(function($rootScope, $location) {
            $rootScope.$on("$routeChangeStart", function(event, next, current) {
                if (!$rootScope.userName) {
                    if (next && next.templateUrl === "login/login.html") {
                        return;   
                    } else {
                        $location.path("/login");
                    }
                }
            })
        })
    app.controller("IndexController", [
                       "$scope", "$route", "$location", 
                       function($scope, $route, $location) {
                           $scope.master = {};
                           $scope.master.viewTitle = "";
                       }
                   ]);
    app.controller("HomeController", [
                       "$rootScope", "$scope", "$route", "$location", 
                       function($rootScope, $scope, $route, $location) {
                           $scope.master.viewTitle = "Welcome " + $rootScope.userName;
                       }
                   ]);
    app.controller("LoginController", [
                       "$rootScope", "$scope", "$route", "$location", 
                       function($rootScope, $scope, $route, $location) {
                           $scope.master.viewTitle = "Login";
                           $scope.submitted = false;
                           $scope.submit = function(){
                               $scope.submitted = true;
                               if ($scope.form.$valid) {
                                   $rootScope.userName = $scope.signin.username;
                                   $location.path("/");
                               }
                           };
                           $scope.signin = {
                               username: ""
                           };
                       }
                   ]);
    
    document.addEventListener('deviceready', function() {
        navigator.splashscreen.hide();
    }, false);
})(window.angular);