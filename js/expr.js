/**
 * Created by ningrunting on 2016/7/15.
 */
    //原理不是很理解
var app = angular.module('myApp', []);
app.controller('myController', function($scope, $parse){
    $scope.$watch('expr', function(newVal, oldVal, scope){
        if (newVal != oldVal)
        {
            var parseFun = $parse(newVal);
            $scope.parseValue = parseFun(scope); //不懂
        }
    });
});