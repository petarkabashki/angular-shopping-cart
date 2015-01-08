/**
 * Created by Aneta on 08/01/2015.
 */
angular.module("shoppingCart.directives", [])
    .directive("category", function(){
        return {
            restriction: "A",
            templateUrl: "home/templates/category.html",
            replace: true
        }
    })
    .directive("shoppingCart", function(){
        return {
            restriction: "EA",
            templateUrl: "home/templates/shopping-cart.html",
            replace: true,
            scope: true,
            transclude: true
        }
    })
    .directive("basket", function(){
        return {
            restriction: "EA",
            templateUrl: "basket/templates/basket-items.html"
            //scope: {}
        };
});