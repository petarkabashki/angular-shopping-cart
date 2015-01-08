/**
 * Created by Aneta on 08/01/2015.
 */
angular.module("shoppingCart.directives", [])
    .directive("msMenu", function(){
        return {
            restriction: "E",
            templateUrl: "components/menu/menu.html",
            replace: true
        }
    })
    .directive("shoppingCart", function() {
        return {
            restriction: "EA",
            templateUrl: "components/productView/productListView.html",
            replace: true,
            scope: true,
            transclude: true
        };
    });
    /*
    .directive("basket", function(){
        return {
            restriction: "EA",
            templateUrl: "basket/templates/basket-items.html"
            //scope: {}
        };
     });
        */
