app.controller('MainController', function ($scope) {
    $scope.test = "test";
    $scope.books = [
        {
            name: 'Green Eggs and Ham',
            url: "images/green.jpg",
            rate: 5
        }

    ]
    $scope.remove = function (i) {
        $scope.books.splice(i, 1)
    }
    $scope.submit = function () {
        $scope.books.push({ name: $scope.name, url: $scope.url, rate: $scope.rate })
        $scope.name = "";
        $scope.url = "";
    }
})