const sportStoreAdmin = angular.module("sportStoreAdmin", ["ngRoute"]);

sportStoreAdmin.config(
    ['$routeProvider', ($routeProvider) => {
        $routeProvider.when("/login", {
                templateUrl: './views/admin/login.html'
            }),
            $routeProvider.when("/main", {
                templateUrl: './views/admin/main.html'
            })
    }]
);

export default sportStoreAdmin;