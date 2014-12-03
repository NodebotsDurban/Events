angular.module('led', [])
  .controller('LedController', ['$scope', '$http', function($scope,$http){
  
    function getAndForget(url){
      console.log('getting:', url);
      $http.get(url).success(
        function(data, status, headers, config) {
          $scope.todos = data;

        }).error(function(data, status, headers, config) {
          //handle error
        });
      
    }

    $scope.ledOn = function(){
      getAndForget('/ledOn');
    };
    
    $scope.ledOff = function(){
      getAndForget('/ledOff');
    };

  }]);
