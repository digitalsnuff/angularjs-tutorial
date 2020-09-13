import sportStoreAdmin from '../../modules/admin/admin';

sportStoreAdmin.controller(
    "mainCtrl", ['$scope', ($scope) => {
        $scope.screens = ["Produkty", "Zamównienia"];
        $scope.current = $scope.screens[0];

        $scope.setScreen = (index) => {
            $scope.current = $scope.screens[index];
            console.log($scope.current);
        }

        $scope.getScreen = () => {
            return $scope.current === "Produkty" ?
                "./views/admin/products.html" : './views/admin/orders.html'
        }
    }]
)