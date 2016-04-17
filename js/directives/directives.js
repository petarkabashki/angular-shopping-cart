
angular.module("shoppingCart.directives", [])
    .directive("msMenu", function(){
        return {
            restriction: "EA",
            templateUrl: "components/menu/menu.html"
        };
    })
.directive("msBasket", function(){
    return {
        restriction: "EA",
        templateUrl: "components/basket/basket.html",
        replace: true
    };
});