import '../modules/sportStore';
import {
    sportStoreApp
} from '../modules/sportStore';

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
            },
            {
                name: "Produkt #5",
                description: "To jest produkt.",
                category: "Kategoria #1",
                price: 202
            },
            {
                name: "Produkt #6",
                description: "To jest produkt.",
                category: "Kategoria #1",
                price: 404
            },
            {
                name: "Produkt #7",
                description: "To jest produkt.",
                category: "Kategoria #1",
                price: 440
            },
            {
                name: "Produkt #8",
                description: "To jest produkt.",
                category: "Kategoria #2",
                price: 505
            },
            {
                name: "Produkt #9",
                description: "To jest produkt.",
                category: "Kategoria #1",
                price: 510
            },
            {
                name: "Produkt #10",
                description: "To jest produkt.",
                category: "Kategoria #1",
                price: 310
            }
        ]
    }
}])