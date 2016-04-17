angular.module("myRouteApp", ["ngRoute"])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when("/page1", {
                templateUrl: "Subpage_1.html"
            })
            .when("/page2", {
                templateUrl: "Subpage_2.html"
            })
            .otherwise({
                redirectTo: "/"
            });
    }]);
