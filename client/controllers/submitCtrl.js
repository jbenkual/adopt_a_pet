app.controller('submitCtrl', ['$scope', '$state', '$stateParams', 'PetService', function($scope, $state, $stateParams, PetService){
  $scope.petInfo = {gender: "?", available: true};
  console.log("test", $stateParams.uid);

  if(PetService.pets.length === 0) {
    console.log("loading data")
    PetService.loadPets(function(data) {
      console.log(data);
      $scope.petInfo = $.grep(data, function(e){ return e._id == $stateParams.uid; })[0];
      console.log($scope.petInfo);

    });
  }
  //$scope.petInfo = $.grep(PetService.pets, function(e){ return e._id == $stateParams.uid; });
  //console.log(PetService.pets);

  
  $scope.newPet = function() {
    PetService.createPet($scope.petInfo);
  };

  $scope.mf = function(g) {
    $scope.petInfo.gender = g;
  };

  $scope.closeModal = function () {
    $('#cancel').foundation('reveal', 'close');
  };

  $scope.delete = function (pId) {
     $('#cancel').foundation('reveal', 'close');
    console.log("delete " + pId);
    PetService.deletePet(pId, function(response) {
      if(response === "OK") {
        $("#" + pid).parent().remove();
      }
    });
  };
  
}]);