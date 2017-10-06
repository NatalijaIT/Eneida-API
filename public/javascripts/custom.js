var app = angular.module('MyApp', ['ngRoute']);
var eneidaUrl = "http://localhost:3000";
app.controller('MainCntrl', function($http) {
    var vm = this;
    $http.get(eneidaUrl)
        .then(function(response) {
            vm.rows = response.data.eneida;
            //console.log($scope.rows)
        })
    vm.sendData = function() {
        let id = vm.rows[vm.rows.length - 1].id + 1;
        //console.log($scope);
        let req = {
            method: 'POST',
            url: eneidaUrl,
            data: JSON.stringify({
                id: id,
                text: vm.text
            })
        }

        // console.log(req);

        $http(req).then(function(response) {
            vm.rows = response.data.eneida;
            //console.log(data)
        })
    };
    vm.delete = function(id) {
        //console.log(eneidaUrl + "/" + id);
        $http({
            method: 'DELETE',
            url: eneidaUrl + "/" + id
        }).then(function(response) {
            vm.rows = response.data.eneida;
        })
    };

    vm.edit = function(row) {
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

        $http(req).then(function(response) {
            vm.rows = response.data.eneida;
            //console.log(data)
        })
    };

});