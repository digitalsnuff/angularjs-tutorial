import sportStoreAdmin from '../../modules/admin/admin';

sportStoreAdmin.constant(
    "SPORT_STORE_ADMIN_PRODUCTS_CONFIG", {
        productsUrl: "/api/products"
    }
);

sportStoreAdmin.config(
    ($httpProvider) => {
        $httpProvider.defaults.withCredentials = true;
    }
);

sportStoreAdmin.controller("productsCtrl", ['$scope', '$resource', 'SPORT_STORE_ADMIN_PRODUCTS_CONFIG', ($scope, $resource, SPORT_STORE_ADMIN_PRODUCTS_CONFIG) => {
    $scope.productsResource = $resource(SPORT_STORE_ADMIN_PRODUCTS_CONFIG.productsUrl + ":id", {
        id: "@id"
    });
    $scope.listProducts = () => {
        $scope.products = $scope.productsResource.query();
    }

    $scope.deleteproduct = (product) => {
        product.$delete().then(
            (res) => {
                $scope.products.splice($scope.products.indexOf(product), 1);
            },
            (err) => {

            }
        );
    };

    $scope.createProduct = (product) => {
        new $scope.productsResource(product).$save().then((newProduct) => {
            $scope.products.push(newProduct);
            $scope.editedProduct = null;
        });
    };

    $scope.updateproduct = (product) => {
        product.$save();
        $scope.editedProduct = null;
    };

    $scope.startEdit = (product) => {
        $scope.editedProduct = product;
    }

    $scope.cancelEdit = () => {
        $scope.editedProduct = null;
    }

    $scope.listProducts();
}])