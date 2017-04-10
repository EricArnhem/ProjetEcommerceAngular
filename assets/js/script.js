var coffeeApp = angular.module('coffeeApp', []);

coffeeApp.controller('cartCtrl', function ($scope) {
    // Fonction qui se déclanche quand on clique sur le bouton "+"
    $scope.quantityPlus = function (cartItem) {
        cartItem.quantity++;
    };

    // Fonction qui se déclanche quand on clique sur le bouton "-"
    $scope.quantityMinus = function (cartItem) {
        if (cartItem.quantity > 0) {
            cartItem.quantity--;
        }
    };

    $scope.totalPrice = function () {
        var total = 0;
        angular.forEach($scope.cartItems, function (cartItem, index) {
            total += cartItem.prix * cartItem.quantity;
        });
        console.log(total);
        return total;
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
            $scope.cartItems.push({"img": this.coffee.img, "marque": this.coffee.marque, "reference": this.coffee.reference, "type": this.coffee.type, "nom": this.coffee.nom, "description": this.coffee.description, "prix": this.coffee.prix, "quantity": this.coffee.quantity});
        };
    }]);
