(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const app = angular.module('Lemonade', []);


const controllers = [
    require('./controllers/lemonStock'),
    require('./controllers/lemonInfo'),
    require('./controllers/lemonBuyButton'),
];

for (let i =0; i < controllers.length; i++) {
    app.controller(controllers[i].name, controllers[i].func);
    console.log(controllers[i]);
    console.log('lemonstock');
}

app.component('lemonStock', {

    templateUrl: 'templates/lemon-stock.html',
    controller: 'LemonStockController',

});

app.component('lemonInfo', {

    templateUrl: 'templates/lemon-info.html',
    controller: 'LemonInfoController',

});

app.component('lemonBuyButton', {

    templateUrl: 'templates/lemon-buy-button.html',
    controller: 'LemonBuyButtonController',

});

app.factory('lemonPeopleService', function () {
    console.log('lemon service in the house');
});
},{"./controllers/lemonBuyButton":2,"./controllers/lemonInfo":3,"./controllers/lemonStock":4}],2:[function(require,module,exports){
module.exports = {
    name: 'lemonBuyButtonController',
    func: function ($scope) {

    },
};
},{}],3:[function(require,module,exports){
module.exports = {
    name: 'LemonInfoController',
    func: function ($scope) {
        console.log('lemon info func');
    },
}
},{}],4:[function(require,module,exports){
module.exports = {
    name: 'LemonStockController',
    func: function ($scope) {
        console.log('lemon stock func');
        $scope.supplies = [
            {name: lemons, count: 0, price: 2.00 },
            {name: sugar, count: 0, price: 1.25 },
            {name: ice, count: 0, price: 0.50 },
            {name: cups, count: 0, price: 0.10 },
            
        ];
        $scope.buy = function (what) {
            console.log('buy function ballin out of control');
        };
    },
};
},{}]},{},[1]);
