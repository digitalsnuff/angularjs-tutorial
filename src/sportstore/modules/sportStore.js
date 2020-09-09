import {
    customFilters
} from '../filters/customFilters';

import {
    cartComponent
} from '../components/cart/cart';

const sportStoreApp = angular.module("sportStoreApp", ["customFilters", "cart", "ngRoute"]);

sportStoreApp.config(
    ['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) => {
        $routeProvider.when("/checkout", {
            templateUrl: './views/checkoutSummary.html'
        });

        $routeProvider.when("/products", {
            templateUrl: './views/productList.html'
        });

        $routeProvider.when("/", {
            templateUrl: './views/productList.html'
        });

        $routeProvider.otherwise({
            template: '<h1>Not Found</h1>'
        });
        $locationProvider.html5Mode(true);
    }]);

export {
    sportStoreApp
};