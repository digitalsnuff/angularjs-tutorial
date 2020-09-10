import sportStoreApp from '../modules/sportStore';
import cart from '../modules/cart';

sportStoreApp.constant(
    'SPORT_STORE_CONFIG', {
        dataUrl: 'http://localhost:1337/products',
        orderUrl: 'http://localhost:1337/orders'
    }
);

sportStoreApp.controller("sportStoreCtrl", ["$scope", '$http', '$location', 'cart', 'SPORT_STORE_CONFIG', ($scope, $http, $location, cart, SPORT_STORE_CONFIG) => {
    $scope.data = {};

    $http.get(SPORT_STORE_CONFIG.dataUrl)
        .then(
            (res) => {
                $scope.data.products = res.data;
            },
            (err) => {
                console.log(err);
                $scope.data.error = err;
            }
        )

    $scope.sendOrder = (shippingDetails) => {
        const order = angular.copy(shippingDetails);

        order.products = cart.getProducts();

        console.log(JSON.stringify(order));

        $http.post(SPORT_STORE_CONFIG.orderUrl, order)
            .then(
                (res) => {
                    $scope.data.orderId = res.data.id;
                    cart.getProducts().length = 0;
                },
                (err) => {
                    $scope.data.orderError = err;
                },
            )
            .catch(function (data, status) {
                console.log('Error occured');
            })
            .finally(() => {
                console.log('This finally block');
                $location.path("/complete");
            });
    }
    return;

}])