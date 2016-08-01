/**
 * Created by ningrunting on 2016/7/15.
 */
/*var app = angular.module('CtrlApp',[]);
app.controller('firstController',function($scope){
   $scope.counter = 0;
    $scope.add = function(amount){
        $scope.counter += amount;
    };
    $scope.subtract = function(amount){
        $scope.counter -= amount;
    }

});*/

var app2 = angular.module('MultiCtrl',[]);
app2.controller('parentController', function($scope){
   $scope.person = {}
        greeted:false;
});

app2.controller('childController', function($scope){
   $scope.sayHello = function(){
       $scope.person.name = "nrt";
       $scope.person.greeted = true;
   };
});
