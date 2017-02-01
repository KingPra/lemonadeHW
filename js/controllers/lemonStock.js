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