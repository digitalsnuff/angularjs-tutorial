import {
    customFilters
} from '../filters/customFilters';

import {
    cartComponent
} from '../components/cart/cart';

const sportStoreApp = angular.module("sportStoreApp", ["customFilters", "cart", "ngRoute"]);

sportStoreApp.config(
    ($routeProvider) => {
        $routeProvider.when("/checkout", {
            templateUrl: 'sportstore/views/checkoutSummary.html'
        });

        $routeProvider.when("/products", {
            templateUrl: 'sportstore/views/productList.html'
        });

        $routeProvider.otherwise({
            templateUrl: 'sportstore/views/productList.html'
        });
    }
)

export {
    sportStoreApp
};