angular.module('starter.controllers', [])


.controller('DashCtrl', function($scope,$location) {

  $scope.confirmarEnderecoUsuario = function() {
       $location.path('/tab-interessse');
  };

  $scope.bairros = [
  { nome: 'Centro', id: 1 },
  { nome: 'Zona 1', id: 2 },
  { nome: 'Zona 2', id: 3 },
  { nome: 'Zona 3', id: 4 },
  { nome: 'Vila', id: 5 },
  { nome: 'Requiao', id: 6 }
];
})

.controller('InteresseCtrl', function($scope) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.confirmarEnderecosInteresse = function() {
    //salvar enderecos
  };

  $scope.bairros = [
  { nome: 'Centro', id: 1 },
  { nome: 'Zona 1', id: 2 },
  { nome: 'Zona 2', id: 3 },
  { nome: 'Zona 3', id: 4 },
  { nome: 'Vila', id: 5 },
  { nome: 'Requiao', id: 6 }
];
})

.controller('NotificCtrl', function($scope, $ionicActionSheet) {

  $scope.mostrarOcorrencia = function() {

    $ionicActionSheet.show({
      titleText: 'Ocorrências',
      buttons: [
        { text: '<i class="icon flaticon-gun"></i> Assalto' },
        { text: '<i class="icon flaticon-car-insurance"></i> Acidente' },
        { text: '<i class="icon flaticon-skull-and-bones"></i> Homicídio' },
        { text: '<i class="icon flaticon-group"></i> Tumulto' }
      ],
      cancelText: 'Cancelar',
      cancel: function() {
        console.log('CANCELLED');
      },
      buttonClicked: function(index) {
        console.log('BUTTON CLICKED', index);
        return true;
      }
    });
  };
});
