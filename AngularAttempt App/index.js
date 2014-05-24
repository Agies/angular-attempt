(function(angular) {
    var app = angular.module("AngularAttempt", ["ngRoute"]);
    app.config(["$routeProvider", "$sceDelegateProvider", function(routeProvider, sceDelegateProvider){
        sceDelegateProvider.resourceUrlWhitelist([ "**" ]);
        /*routeProvider
        	.when("/", {
                templateUrl: "./views/home.html",
                controller: "HomeController",
            })*/
    }]);
    
    app.controller("IndexController", ["$scope", "$route", "$location", function($scope, $route, $location){
        $scope.signin = {
            username: ""
        };
    }]);
    
    document.addEventListener('deviceready', function() {
        navigator.splashscreen.hide();
    }, false);

})(window.angular);