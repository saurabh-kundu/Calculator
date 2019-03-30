import angular from 'angular';

angular.module('plunker', []).controller('myCtrl', function($scope) {
  $scope.products = ["Milk", "Bread", "Cheese"];
});
