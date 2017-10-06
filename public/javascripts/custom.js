var eneidaUrl = "http://localhost:3000";
var app = angular.module('MyApp', ['ngRoute']);
app.controller('MainCntrl', function($scope, $http) {
    $http.get(eneidaUrl).success(function(response) {
        $scope.rows = response.eneida;
        //console.log($scope.rows)
    })
    $scope.sendData = function() {
        let id = $scope.rows[$scope.rows.length - 1].id + 1;
        //console.log($scope);
        let req = {
            method: 'POST',
            url: eneidaUrl,
            data: JSON.stringify({
                id: id,
                text: $scope.text
            })
        }

        // console.log(req);

        $http(req).success(function(response) {
            $scope.rows = response.eneida;
            //console.log(data)
        })
    };
    $scope.delete = function(id) {
        //console.log(eneidaUrl + "/" + id);
        $http({
            method: 'DELETE',
            url: eneidaUrl + "/" + id
        }).success(function(response) {
            $scope.rows = response.eneida;
        })
    };

    $scope.edit = function(row) {
        //let id = $scope.rows[$scope.rows.length - 1].id + 1;
        //console.log(row);
        let req = {
            method: 'PUT',
            url: eneidaUrl + "/" + row.id,
            data: JSON.stringify({

                text: row.text
            })
        }

        //console.log(req);

        $http(req).success(function(response) {
            $scope.rows = response.eneida;
            //console.log(data)
        })
    };

});