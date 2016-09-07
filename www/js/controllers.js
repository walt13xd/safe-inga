angular.module('starter.controllers', [])


    .controller('Main', function ($scope, $state, $http) {

        var url = 'http://localhost:8080';

        $scope.confirmarEnderecoUsuario = function () {
            $state.go('tab.segundo');
        };

        $scope.confirmarEnderecosInteresse = function () {

        }

        $scope.bairros = [];
        $scope.usuario = {bairro: '', bairros: []}

        $http.get('http://localhost:8080/api/bairro').then(function success(result) {
            $scope.bairros = result.data;
        }, function error(data) {
            console.log(data);
        });
    })

    .controller('NotificCtrl', function ($scope, $ionicActionSheet) {

        $scope.mostrarOcorrencia = function () {

            $ionicActionSheet.show({
                titleText: 'Ocorrências',
                buttons: [
                    {text: '<i class="icon flaticon-gun"></i> Assalto'},
                    {text: '<i class="icon flaticon-car-insurance"></i> Acidente'},
                    {text: '<i class="icon flaticon-skull-and-bones"></i> Homicídio'},
                    {text: '<i class="icon flaticon-group"></i> Tumulto'}
                ],
                cancelText: 'Cancelar',
                cancel: function () {
                    console.log('CANCELLED');
                },
                buttonClicked: function (index) {
                    console.log('BUTTON CLICKED', index);
                    return true;
                }
            });
        };
    });
