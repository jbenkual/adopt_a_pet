app.controller('submitCtrl', ['$scope', '$state', 'PetService', function($scope, $state, PetService){
  $scope.petInfo = {gender: "?", available: true};

  $scope.newPet = function() {
    PetService.createPet($scope.petInfo);
  };

  $scope.mf = function(g) {
    $scope.petInfo.gender = g;
  };
  
}]);