angular.module('starter.controllers', [])


    .controller('Main', function ($scope, $state, $http, $window, $ionicPopup, $timeout, $rootScope) {

        $scope.bairros = [];
        $rootScope.usuario = {bairro: '', bairros: []};

        var localStorage = $window.localStorage;

        $scope.confirmarEnderecoUsuario = function () {
            $state.go('tab.segundo');
        };

        $scope.addBairro = function (id) {
            $rootScope.usuario.bairro = id;
            localStorage['id'] = id;
        }

        $scope.addBairros = function (id) {
            $rootScope.usuario.bairros.push(id);
        }

        $scope.confirmarEnderecosInteresse = function () {
            $rootScope.usuario.bairro = localStorage['id'];
            $http.post('http://localhost:8080/api/usuario', $rootScope.usuario).then(function success(result) {
                localStorage['hash'] = result.data;
                $ionicPopup.alert({
                    title: 'Obrigado',
                    template: 'Cadastro realizado com sucesso.'
                });
                $state.go('tab.timeline');
            }, function error(result) {
                console.log(result);
            });
        }

        $http.get('http://localhost:8080/api/bairro').then(function success(result) {
            $scope.bairros = result.data;
        }, function error(data) {
            console.log(data);
        });
    })

    .controller('Timeline', function ($scope, $http, $window, $state) {
        var localStorage = $window.localStorage;
        $scope.time = [];

        $http.get('http://localhost:8080/api/usuario/timeline/' + localStorage['hash']).then(function success(result) {
            $scope.timeline = result.data;
        }, function error(result) {
            console.log(result);
        });

        $scope.cadatrarOcorrencia = function () {
            $state.go('tab.form');
        }
    })

    .controller('Form', function ($scope, $http, $state, $ionicPopup) {
        $scope.ocorrencia = {bairro: '', tipo_ocorrencia: '', local: '', descrica: ''};
        $scope.bairros = [];

        $http.get('http://localhost:8080/api/bairro').then(function success(result) {
            $scope.bairros = result.data;
        }, function error(data) {
            console.log(data);
        });

        $scope.cadatrarOcorrenciaForm = function () {
            $ionicPopup.alert({
                title: 'Aviso',
                template: 'Ocorrência cadastrada com sucesso.'
            });
            $state.go('tab.timeline');
        }

    });
