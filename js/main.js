/**
 * Created by Aneta on 19/12/2014.
 */

var shoppingCart = angular.module("shoppingCart", [
    'ngRoute',
    'shoppingCart.directives'
    ])
    .config(["$routeProvider", function($routeProvider){
        $routeProvider
            .when("/home", {
                templateUrl: "home/templates/shopping-cart.html"
            })
            .when("/basket", {
                templateUrl: "basket/basket.html"
            })
            .otherwise({redirectTo: "/home"});
    }])
    .controller('cartCtrl', ['$scope', function($scope) {
        $scope.items =[
            {
                "category": "Women",
                "subcat": "Clothing",
                "item": "Party wear - Front Leather Panelled Ponte Treggings",
                "price": "159.00",
                "uid": 1
            },
            {
                "category": "Women",
                "subcat": "Clothing",
                "item": "Speziale Italian Cupro Draped Bodycon Dress",
                "price": "89.00",
                "uid": 2,
                "quantity": "0"
            },
            {
                "category": "Beauty",
                "subcat": "Skincare",
                "item": "Aptiva - Wine Elixir Night Cream",
                "price": "79.00",
                "uid": 3,
                "quantity": "0"
            },
            {
                "category": "Men",
                "subcat": "Suits & Tailoring",
                "item": "Sartorial – Slim Fit Luxury Pure Cotton Rib Striped Shirt",
                "price": "39.50",
                "uid": 4,
                "quantity": "0"
            },
            {
                "category": "Men",
                "subcat": "Jeans",
                "item": "Big & Tall Washed Look Bootleg Denim Jeanst",
                "price": "25.00",
                "uid": 5,
                "quantity": "0"
            }
        ];
        $scope.basket = [],
        $scope.total = 0;

        $scope.calcTotal = function(item, boolean){
            var t = parseInt(item.price * item.quantity, 10);
            if(boolean){
                $scope.total += t;
            }
            else {
                $scope.total -= t;
            }
            console.log($scope.total);
        };

        $scope.click = function(index){
            $scope.item = $scope.items[index];
        };
        $scope.clearItem = function(){
            $scope.item.quantity = 0;
        };
        $scope.addToBasket = function(item){
            $scope.basket.push(item);
            $scope.calcTotal(item, true);
            console.log($scope.basket);
        };
        $scope.removeFromBasket = function(item) {
            var i = $scope.basket.indexOf(item);
            $scope.basket.splice(i, 1);
            $scope.calcTotal(item, false);
        };
    }]);
    //.directive("category", function(){
    //    return {
    //        restriction: "A",
    //        templateUrl: "components/templates/category.html",
    //        replace: true
    //    }
    //})
    //.directive("shoppingCart", function(){
    //    return {
    //        restriction: "EA",
    //        templateUrl: "components/templates/shopping-cart.html",
    //        replace: true,
    //        scope: true,
    //        transclude: true
    //    }
    //})
    //.directive("basket", function(){
    //    return {
    //        restriction: "EA",
    //        templateUrl: "components/templates/basket-items.html",
    //        replace: true,
    //        scope: true
    //    };
    //});