var coffeeApp = angular.module('coffeeApp', []);

coffeeApp.controller('cartCtrl', function ($scope) {
    $scope.quantity = 1;
    // Fonction qui se déclanche quand on clique sur le bouton "+"
    $scope.quantityPlus = function () {
        // Si la quantité est supérieur ou égale à 1
        if ($scope.quantity >= 1) {
            // On peut ajouter 1 à la quantité
            $scope.quantity = $scope.quantity + 1;
        }
    };

    // Fonction qui se déclanche quand on clique sur le bouton "-"
    $scope.quantityMinus = function () {
        // Si la quantité est supérieur à 1
        if ($scope.quantity > 1) {
            // On peut enlever 1 à la quantité
            $scope.quantity = $scope.quantity - 1;
        }
    };
    
        // Fonction qui supprime l'item du panier au clic sur le bouton Supprimer
        $scope.remove = function ($index) {
            $scope.cartItems.splice($index, 1);
        };

});


// Ici il faut['$http', '$scope', avant la fonction sinon ça ne marche pas
coffeeApp.controller('coffeeCtrl', ['$http', '$scope', function ($http, $scope) {
        //$http.get appel les fichiers json
        $http.get('assets/js/coffee.json')
                .then(function (reponse) {
                    // reponse.data renvoie ce qui est demandé
                    $scope.coffees = reponse.data;
                    $scope.orderByPrix = "prix";
                });
                
        $http.get('assets/js/cart.json')
                .then(function (reponse) {
                    // reponse.data renvoie ce qui est demandé
                    $scope.cartItems = reponse.data;
                });
                
        // Fonction pour ajouter un item
        $scope.addItem = function () {
            $scope.cartItems.push({"img": "dolcegusto.jpg", "marque": "Nescafe", "reference": "m001", "type": "machine", "nom": "Dolce Gusto", "description": "Système haute pression (jusqu’à 15 bars) associé aux capsules brevetées Nescafé", "prix": 129.99});
        };
    }]);
