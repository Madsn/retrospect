app.controller('ItemsListCtrl', ['$scope', '$meteor', function($scope, $meteor) {
  $scope.items = $meteor.collection(Items);
}]);
