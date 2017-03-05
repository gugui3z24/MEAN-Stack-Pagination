angular.module('mainController', ['ui.bootstrap'])

.controller('mainCtrl', function($scope, $http) {

    $scope.pageSize = 3;
    $scope.currentPage = 1;

    $scope.userData = [{
        first: "Jomar",
        last: "Patel",
        "username": "@patel",
    }, {
        first: "Pranab",
        last: "Mukherjee",
        "username": "@mukherjee",
    }, {
        first: "Mohammad",
        last: "Ansari",
        "username": "@hamid",
    }, {
        first: "Dilip",
        last: "Shanghvi",
        "username": "@shanghvi",
    }, {
        first: "Dev",
        last: "Patel",
        "username": "@dev",
    }, {
        first: "Azim",
        last: "Premji",
        "username": "@premji",
    }, {
        first: "Mark",
        last: "Henry",
        "username": "@henry"
    }, {
        first: "David",
        last: "Acosta",
        "username": "@gugui3z24",
    }, {
        first: "Brock",
        last: "Lesnar",
        "username": "@lesnar"
    }, {
        first: "Roman",
        last: "Reigns",
        "username": "@reigns",
    }, {
        first: "Sin",
        last: "Cara",
        "username": "@cara",
    }, {
        first: "Enzo",
        last: "Amore",
        "username": "@amore",
    }];

})

.filter('pagination', function() {
    return function(data, start) {
        return data.slice(start);
    };
});
