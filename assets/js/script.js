var coffeeApp = angular.module('coffeeApp', []);

coffeeApp.controller('cartCtrl', function($scope){
  $scope.count = 1;
  // Fonction qui se déclanche quand on clique sur le bouton "+"
  $scope.countPlus = function() {
    // Si la quantité est supérieur ou égale à 1
    if($scope.count >= 1){
      // On peut ajouter 1 à la quantité
      $scope.count = $scope.count + 1;
    }
  };
  // Fonction qui se déclanche quand on clique sur le bouton "-"
  $scope.countMinus = function() {
    // Si la quantité est supérieur à 1
    if($scope.count > 1){
      // On peut enlever 1 à la quantité
      $scope.count = $scope.count - 1;
    }
  };

});

// Ici il faut['$http', '$scope', avant la fonction sinon ça ne marche pas
coffeeApp.controller('coffeeCtrl', ['$http', '$scope', function ($http, $scope) {
  //$http.get appel le fichier .json
  $http.get('assets/js/coffee.json')
  .then(function (reponse) {
    //reponse.data renvoye ce qui est demandé
    $scope.coffees = reponse.data;
    $scope.orderByPrix = "prix";
  });
}]);
