import sportStoreAdmin from '../../modules/admin/admin';

sportStoreAdmin.constant(
    "SPORT_STORE_ADMIN_ORDERS_CONFIG", {
        ordersUrl: "/api/orders"
    }
)

sportStoreAdmin.controller("ordersCtrl", ['$scope', '$http', 'SPORT_STORE_ADMIN_ORDERS_CONFIG', ($scope, $http, SPORT_STORE_ADMIN_ORDERS_CONFIG) => {
    console.log(SPORT_STORE_ADMIN_ORDERS_CONFIG);

    $http.get(SPORT_STORE_ADMIN_ORDERS_CONFIG.ordersUrl)
        .then((res) => {
                $scope.orders = res.data;
            },
            (err) => {
                console.log(err);
                $scope.error = err;
            });

    $scope.selectedOrder;

    $scope.selectOrder = (order) => {
        $scope.selectedOrder = order;
    };

    $scope.calcTotal = (order) => {
        let total = 0;
        for (let i = 0; i < order.products.length; i++) {
            total += order.products[i].count * order.products[i].price;
        }
        return total;
    }
}]);