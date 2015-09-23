app.controller('homeCtrl', ['$scope', '$state', 'PetService', function($scope, $state, PetService){
  $scope.title = "Welcome to Home";

  $scope.pets = [];

  $scope.load = function() {
    PetService.loadPets(function(data) {
      $scope.pets = data;
    });
  };

  $scope.load();

  $scope.newPet = function() {
    PetService.createPet();
  };
  
  $scope.delete = function (pId) {
    console.log("delete " + pId);
    PetService.deletePet(pId, function(response) {
      if(response === "OK") {
        $("#" + pid).parent().remove();
      }
    });
  };
}]);