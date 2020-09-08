import '../modules/sportStore';
import {
    sportStoreApp
} from '../modules/sportStore';

sportStoreApp.constant(
    'SPORT_STORE_CONFIG', {
        dataUrl: 'http://localhost:1337/products'
    }
);

sportStoreApp.controller("sportStoreCtrl", ["$scope", '$http', 'SPORT_STORE_CONFIG', ($scope, $http, SPORT_STORE_CONFIG) => {
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
    return;

}])