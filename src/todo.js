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