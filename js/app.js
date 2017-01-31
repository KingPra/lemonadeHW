const app = angular.module('Lemonade', []);


const controllers = [
    require('./controllers/sugarButton'),
];

for (let i =0; i < controllers.length; i++) {
    app.controller(controllers[i].name, controllers[i].func);
}

app.component('sugarButton', {

    templateUrl: 'templates/sugar-button.html',
    bindings: {},
    controller: SnackButtonController,

});