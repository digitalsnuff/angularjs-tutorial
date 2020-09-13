import sportStoreAdmin from '../../modules/admin/admin';

sportStoreAdmin.constant(
    "SPORT_STORE_ADMIN_CONFIG", {
        authUrl: "/auth/local"
    }
)

sportStoreAdmin.controller("authCtrl", ['$scope', '$http', '$location', 'SPORT_STORE_ADMIN_CONFIG',
    ($scope, $http, $location, SPORT_STORE_ADMIN_CONFIG) => {
        // console.log(SPORT_STORE_ADMIN_CONFIG)
        $scope.authenticate = (user, pass) => {
            $http.post(SPORT_STORE_ADMIN_CONFIG.authUrl, {
                    identifier: user,
                    password: pass
                }, {
                    withCredentials: true,
                    // headers: {
                    //     //'Access-Control-Allow-Origin': '*',
                    //     'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                    //     'Access-Control-Allow-Origin': 'http://localhost:1337',
                    //     'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,HEAD,OPTIONS',
                    //     'Access-Control-Allow-Headers': 'Content-Type,Authorization,Origin,Accept'
                    // },

                })
                .then((res) => {
                    console.log(res);
                    $location.path("/main");
                }, (err) => {
                    $scope.authenticationError = err;
                })
        }
    }
])