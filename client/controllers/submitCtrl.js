app.controller('submitCtrl', ['$scope', '$state', '$stateParams', 'PetService', function($scope, $state, $stateParams, PetService){
  $scope.petInfo = {gender: "?", available: true};
  console.log("test", $stateParams.uid);

  $scope.newPet = function() {
    PetService.createPet($scope.petInfo);
  };

  $scope.mf = function(g) {
    $scope.petInfo.gender = g;
  };
  
}]);