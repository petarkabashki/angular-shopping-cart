/**
 * Created by Aneta on 19/12/2014.
 */

var shoppingCart = angular.module("shoppingCart", [
    'ngRoute',
    'shoppingCart.directives'
    ])
    .config(["$routeProvider", function($routeProvider){
        $routeProvider
            .when("/:category/:subcategory", {
                templateUrl: "components/productView/productListView.html"
            })
            .when("/basket", {
                templateUrl: "basket/basket.html"
            })
            .otherwise({redirectTo: "/"});
    }])
    .run(function($rootScope, productsSvc) {
        $rootScope.categories = productsSvc.getCategories();
    })
    .service("productsSvc", function(){
        var service = {
            getCategories: function(){
                return [
                    {
                        name: "Women",
                        subcategories: ["Clothing"]
                    },
                    {
                        name: "Men",
                        subcategories: ["Suits & Tailoring", "Jeans"]
                    },
                    {
                        name: "Beauty",
                        subcategories: ["Skincare"]
                    }
                ];
            },
            getProducts: function(){
                return products =[
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
                        "uid": 2
                    },
                    {
                        "category": "Beauty",
                        "subcat": "Skincare",
                        "item": "Aptiva - Wine Elixir Night Cream",
                        "price": "79.00",
                        "uid": 3
                    },
                    {
                        "category": "Men",
                        "subcat": "Suits & Tailoring",
                        "item": "Sartorial – Slim Fit Luxury Pure Cotton Rib Striped Shirt",
                        "price": "39.50",
                        "uid": 4
                    },
                    {
                        "category": "Men",
                        "subcat": "Jeans",
                        "item": "Big & Tall Washed Look Bootleg Denim Jeanst",
                        "price": "25.00",
                        "uid": 5
                    }
                ];
            }
        };

        return service;
    })
    .controller('productListCtrl', ['$scope', '$routeParams', '$categoriesSvc', function($scope, $routeParams, productsSvc) {

        $scope.products = [];
        console.log($routeParams);

/*
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
        */
    }]);
    //.directive("category", function(){
    //    return {
    //        restriction: "A",
    //        templateUrl: "components/templates/menu.html",
    //        replace: true
    //    }
    //})
    //.directive("shoppingCart", function(){
    //    return {
    //        restriction: "EA",
    //        templateUrl: "components/templates/productListView.html",
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