import {
    cart
} from '../../modules/cart';

const cartComponent = cart.factory("cart", () => {
        let cartData = [];

        return {
            addProduct: (id, name, price) => {
                let addedToExistingItem = false;

                for (let i = 0; i < cartData.length; i++) {
                    if (cartData[i].id === id) {
                        cartData[i].count++;
                        addedToExistingItem = true;
                        break;
                    }
                }

                if (!addedToExistingItem) {
                    cartData.push({
                        count: 1,
                        id: id,
                        price: price,
                        name: name
                    });
                }
            },
            removeProduct: (id) => {
                for (let i = 0; i < cartData.length; i++) {
                    if (cartData[i].id === id) {
                        cartData.splice(i, 1);
                        break;
                    }
                }
            },
            getProducts: () => {
                return cartData;
            }
        }
    })
    .directive("cartSummary", (cart) => {
        return {
            restrict: "E",
            templateUrl: "sportstore/components/cart/cartSummary.html",
            controller: ($scope) => {
                let cartData = cart.getProducts();
                $scope.total = () => {
                    let total = 0;
                    for (let i = 0; i < cartData.length; i++) {
                        total += (cartData[i].price * cartData[i].count);
                    }
                    return total;
                }

                $scope.itemCount = () => {
                    let total = 0;
                    for (let i = 0; i < cartData.length; i++) {
                        total += cartData[i].count;
                    }
                    return total;
                }
            }
        }
    });

export {
    cartComponent
}