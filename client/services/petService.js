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
      console.log("Create: " + response);
    });
  };
});