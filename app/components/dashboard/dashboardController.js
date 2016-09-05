'use strict';

angular.module('app.dashboard', [])
  .controller("DashboardCtrl", ['$scope', '$timeout', '$http', function ($scope, $timeout, $http) {

    //get data
    $http.get('https://s3-us-west-2.amazonaws.com/cindysalinas/files/data.json')
      .then(function(res){

        $scope.labels = [];
        $scope.dataSpeed = [];
        $scope.dataCount =[];
        $scope.valuesAverage =[];
        $scope.dataAverage = [];
        $scope.values = [];
        $scope.valuesCount = [];
        $scope.seriesSpeed = ['Speed'];
        $scope.seriesCount = ['Count'];

        res.data.forEach(function(data){
          $scope.labels.push(data.zoneId);
          //values
          $scope.values.push(data.data.speed);
          $scope.valuesCount.push(data.data.count);
          $scope.valuesAverage.push(data.data.speed/data.data.count);
        });
        $scope.dataSpeed.push($scope.values);
        $scope.dataCount.push($scope.valuesCount);
        $scope.dataAverage.push($scope.valuesAverage);
      });
    $scope.options = {
      legend: {
        display: true
      }
    };
}]);
