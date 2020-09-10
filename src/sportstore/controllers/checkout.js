import sportStoreApp from "../modules/sportStore";
import cart from "../modules/cart";

sportStoreApp.controller(
    "cartSummaryCtrl", ['$scope', 'cart', ($scope, cart) => {
        $scope.cartData = cart.getProducts();

        $scope.total = () => {
            let total = 0;

            for (let i = 0; i < $scope.cartData.length; i++) {
                total += ($scope.cartData[i].price * $scope.cartData[i].count);
            }
            return total;
        }

        $scope.remove = (id) => {
            cart.removeProduct(id);
        }
    }]
)