/**
 * Created by Aneta on 19/12/2014.
 */

var shoppingCart = angular.module("shoppingCart", [
    'ngRoute',
    'shoppingCart.directives'
    ])
    .config(["$routeProvider", function($routeProvider){
        $routeProvider
            .when("/:category?/:subcategory?", {
                templateUrl: "components/productView/productListView.html"
            })
            .otherwise({redirectTo: "/"});
    }])
    .run(function($rootScope, productsService) {
        $rootScope.categories = productsService.getCategories();
    })
    .service("productsService", function(){
        basketProducts = {};

        var service = {
            getBasketProducts: function(){
                return basketProducts;
            },
            getBasketTotal: function(){
                var total = 0;
                for(uid in basketProducts){
                    total += parseFloat(basketProducts[uid].price) * parseInt(basketProducts[uid].quantity);
                }
                return total;
            },
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
                        "name": "Party wear - Front Leather Panelled Ponte Treggings",
                        "price": "159.00",
                        "uid": 1
                    },
                    {
                        "category": "Women",
                        "subcat": "Clothing",
                        "name": "Speziale Italian Cupro Draped Bodycon Dress",
                        "price": "89.00",
                        "uid": 2
                    },
                    {
                        "category": "Beauty",
                        "subcat": "Skincare",
                        "name": "Aptiva - Wine Elixir Night Cream",
                        "price": "79.00",
                        "uid": 3
                    },
                    {
                        "category": "Men",
                        "subcat": "Suits & Tailoring",
                        "name": "Sartorial – Slim Fit Luxury Pure Cotton Rib Striped Shirt",
                        "price": "39.50",
                        "uid": 4
                    },
                    {
                        "category": "Men",
                        "subcat": "Jeans",
                        "name": "Big & Tall Washed Look Bootleg Denim Jeanst",
                        "price": "25.00",
                        "uid": 5
                    }
                ];
            }
        };

        return service;
    })
    .controller('productListCtrl', ['$scope', '$rootScope', '$routeParams', 'productsService', function($scope, $rootScope, $routeParams, productsService) {
        var allProducts = productsService.getProducts();

        $scope.filteredProducts = [];

        allProducts.forEach(function(product){
            if( !$routeParams.category || $routeParams.category === product.category){

                if( !$routeParams.subcategory || $routeParams.subcategory === product.subcat) {
                    product.addQty = 1;
                    $scope.filteredProducts.push(product);
                }
            }

        });

        $scope.addToBasket = function(product){
            $rootScope.$broadcast("productAdded", product);

        };

    }])
    .controller('basketCtrl', ['$scope', '$rootScope', 'productsService', function($scope, $rootScope, productsService) {
        $scope.basketProducts = productsService.getBasketProducts();

        $scope.removeFromBasket = function(uid) {
            delete $scope.basketProducts[uid];

            $scope.total = productsService.getBasketTotal();
        };

        $rootScope.$on("productAdded", function(e,product){
            var addBasketProduct =  $scope.basketProducts[product.uid];
            if(!addBasketProduct){
                addBasketProduct = {
                    name: product.name,
                    price: product.price,
                    quantity: 0
                };
                $scope.basketProducts[product.uid] = addBasketProduct;
            }

            addBasketProduct.quantity += parseInt(product.addQty, 10);


            product.addQty = 1;

            $scope.total = productsService.getBasketTotal();
        });
    }]);