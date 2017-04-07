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