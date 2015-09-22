app.service("PetService", function($http) {
  this.pets = [];

  this.createPet = function() {
    var petInfo = {
      name: "Fluffy",
      kind: "Kitty",
      variety: "Stripey",
      gender: "Girly",
      age: 20,
      desc: "Lovey Dovey",
      available: true
    };
    $http.post("http://localhost:3000/pets", petInfo)
    .success(function(response) {
      console.log(response);
    });
  };

  this.loadPets = function (cb) {
    $http.get("http://localhost:3000/pets")
    .success(function(response) {
      cb(response);
    });
  };

  this.deletePet = function(petId) {
    $http.delete("http://localhost:3000/pets", petId)
    .success(function(response) {
      console.log(response);
    });
  };

  this.adoptPet = function(petInfo) {
    $http.put("http://localhost:3000/pets", petInfo)
    .success(function(response) {
      console.log(response);
    });
  };
});