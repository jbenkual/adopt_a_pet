app.controller('navCtrl', ['$scope', '$state', function($scope, $state){
  $scope.newUser = true;

  $scope.hey = function() {
    console.log("hey!")
  }
}]);