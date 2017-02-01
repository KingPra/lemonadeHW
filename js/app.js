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