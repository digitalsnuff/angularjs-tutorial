import 'angular';

// import 'bootstrap';
// import 'bootstrap/js/dist/util';
// import 'bootstrap/js/dist/dropdown';


import "./scss/vendor.scss";
import "./scss/app.scss";

const model = {
    user: "Adam",
    items: [{
            action: "Kupić buty",
            done: false
        },
        {
            action: "Odebrać bilety",
            done: false
        },
        {
            action: "Zadzwonić do Janka",
            done: false
        }
    ]
}

const todoApp = angular.module("todoApp", []);


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