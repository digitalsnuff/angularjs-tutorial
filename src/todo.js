import 'angular';

// import 'bootstrap';
// import 'bootstrap/js/dist/util';
// import 'bootstrap/js/dist/dropdown';


import "./scss/vendor.scss";
import "./scss/app.scss";

const model = {
    user: "Adam",
}

const todoApp = angular.module("todoApp", []);

// AJAX
todoApp.run(($http) => {
    $http.get("/data/todo.json")
        .then((res) => {
                model.items = res.data;
            },
            (err) => {
                console.log('Something went wrong');
            })
});

// create factory of filters by filter() method.
todoApp.filter("checkedItems", () => {
    return (items, showComplete) => {
        let resultArr = [];

        angular.forEach(items, (item) => {
            if (item.done === false || showComplete === true) {
                resultArr.push(item);
            }
        });

        return resultArr;
    }
})

todoApp.controller("ToDoCtrl", ["$scope", function ($scope) {
    $scope.todo = model;

    $scope.incompleteCount = function () {
        let count = 0;
        angular.forEach($scope.todo.items, (item) => {
            item.done ? null : count++
        });
        return count;
    }

    $scope.warningLevel = () => {
        return $scope.incompleteCount() < 3 ? "badge-success" : "badge-warning";
    }

    $scope.addNewItem = (actionText) => {
        $scope.todo.items.push({
            action: actionText,
            done: false
        })
    }
}]);