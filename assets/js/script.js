var coffeeApp = angular.module('coffeeApp', []);

// Déclaration du contrôleur cartCtrl
coffeeApp.controller('cartCtrl', function ($scope) {
    // Fonction qui se déclanche quand on clique sur le bouton "+"
    $scope.quantityPlus = function (cartItem) {
        // On augmente la quantité de 1
        cartItem.quantity++;
    };

    // Fonction qui se déclanche quand on clique sur le bouton "-"
    $scope.quantityMinus = function (cartItem) {
        // Si la quantité est supérieure à 0
        if (cartItem.quantity > 0) {
            // On peut réduire la quantité de 1
            cartItem.quantity--;
        }
    };

    // Fonction qui supprime l'item du panier au clic sur le bouton Supprimer
    $scope.remove = function ($index) {
        // On supprime un item du tableau en donnant son $index en paramètre
        $scope.cartItems.splice($index, 1);
    };

});


// Déclaration du contrôleur coffeeCtrl avec $http et $scope en dépendances
coffeeApp.controller('coffeeCtrl', ['$http', '$scope', function ($http, $scope) {
        // Récupération des données des fichiers json
        $http.get('assets/js/coffee.json')
                .then(function (reponse) {
                    // reponse.data renvoie le contenu de coffee.json dans la variable coffees
                    $scope.coffees = reponse.data;
                    $scope.orderByPrix = "prix";
                });

        $http.get('assets/js/cart.json')
                .then(function (reponse) {
                    // reponse.data renvoie le contenu de cart.json dans la variable cartItems
                    $scope.cartItems = reponse.data;
                });

        // Fonction pour ajouter un item
        $scope.addItem = function () {
            // On ajoute un item au tableau avec les données de l'article correspondant au bouton "Ajouter au panier"
            $scope.cartItems.push({"img": this.coffee.img, "marque": this.coffee.marque, "reference": this.coffee.reference, "type": this.coffee.type, "nom": this.coffee.nom, "description": this.coffee.description, "prix": this.coffee.prix, "quantity": this.coffee.quantity});
        };

        // Fonction qui calcule et affiche le prix total
        $scope.totalPrice = function () {
            var total = 0;
            // Pour chaque article dans le panier
            angular.forEach($scope.cartItems, function (cartItem, index) {
                // La variable total prend la valeur de chaque item dans la panier multiplié par leurs quantités
                total += cartItem.prix * cartItem.quantity;
            });
            // On retourne la valeur total pour pouvoir l'afficher avec ng-bind="totalPrice"
            return total;
        };
    }]);
