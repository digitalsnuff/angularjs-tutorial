const sportStoreAdmin = angular.module("sportStoreAdmin", ["ngRoute", "ngResource"]);

sportStoreAdmin.config(
    ['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) => {
        $routeProvider.when("/admin/login", {
            templateUrl: './views/admin/login.html'
        });
        $routeProvider.when("/admin/main", {
            templateUrl: './views/admin/main.html'
        });
        $routeProvider.otherwise({
            redirectTo: "/admin/login"
        });

        $locationProvider.html5Mode(true);
    }]
);

export default sportStoreAdmin;