CostumersModule.controller('CostumersController', ['$scope', function($scope) {
    $scope.sortBy = 'name';
    $scope.reverse = false;

    $scope.costumers = [
        {joined: '2000-12-02', name: 'John', city: 'Chandler', orderTotal: 9.9956},
        {joined: '2013-07-16', name: 'Roberta', city: 'Santo André', orderTotal: 133.45},
        {joined: '2020-10-20', name: 'Carla', city: 'São Paulo', orderTotal: 900.00},
        {joined: '2005-01-15', name: 'Rodrigo', city: 'Praia Grande', orderTotal: 566.50}
    ];
    $scope.doSort = function(propName) {
        $scope.sortBy = 'propName';
        $scope.reverse = !reverse;
    }
}]);