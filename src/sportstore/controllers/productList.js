import {
    sportStoreApp
} from '../modules/sportStore';

sportStoreApp
    .constant('PRODUCT_LIST_CONFIG', {
        classListActive: "btn-info",
        pageCount: 3
    });

sportStoreApp
    .controller("productListCtrl", ["$scope", '$filter', 'PRODUCT_LIST_CONFIG', ($scope, $filter, PRODUCT_LIST_CONFIG) => {
        let selectedCategory = null;

        $scope.selectedPage = 1;
        $scope.pageSize = PRODUCT_LIST_CONFIG.pageCount;

        $scope.selectCategory = (newCategory) => {
            selectedCategory = angular.isUndefined(newCategory) ? null : newCategory;
            $scope.selectedPage = 1;
        }

        $scope.selectPage = (newPage) => {
            $scope.selectedPage = newPage;
        }

        $scope.categoryFilterFn = (product) => {
            return selectedCategory === null || product.category === selectedCategory;
        }

        $scope.getCategoryClass = (category) => {
            return selectedCategory === category ? PRODUCT_LIST_CONFIG.classListActive : ""
        }

        $scope.getPageClass = (page) => {
            return $scope.selectedPage === page ? PRODUCT_LIST_CONFIG.classListActive : "";
        }
    }])