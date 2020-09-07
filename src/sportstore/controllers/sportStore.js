import '../modules/sportStore'

sportStoreApp.controller("sportStoreCtrl", ["$scope", ($scope) => {
    $scope.data = {
        products: [{
                name: "Produkt #1",
                description: "To jest produkt.",
                category: "Kategoria #1",
                price: 100
            },
            {
                name: "Produkt #2",
                description: "To jest produkt.",
                category: "Kategoria #1",
                price: 110
            },
            {
                name: "Produkt #3",
                description: "To jest produkt.",
                category: "Kategoria #2",
                price: 210
            },
            {
                name: "Produkt #4",
                description: "To jest produkt.",
                category: "Kategoria #3",
                price: 202
            }
        ]
    }
}])