app.service("PetService", function($http) {
  this.pets = [];

  this.createPet = function(petInfo) {
    $http.post("http://localhost:3000/pets", petInfo)
    .success(function(response) {
      console.log(response);
    });
  };

  this.loadPets = function (cb) {
    $http.get("http://localhost:3000/pets")
    .success(function(response) {
      this.pets = response;
      console.log(this.pets)
      cb(response);
    });
  };

  this.deletePet = function(petId, cb) {
    $http.delete("http://localhost:3000/pets?id="+ petId)
    .success(function(response) {
      cb(response);
    });
  };

  this.adoptPet = function(petInfo) {
    $http.put("http://localhost:3000/pets", petInfo)
    .success(function(response) {
      console.log(response);
    });
  };
});