/**
 * Created by ningrunting on 2016/7/14.
 */
//模块化
var app = angular.module("myApp",[]);

app.controller("myCtrl", function($scope){
    $scope.firstName = "runting";
    $scope.lastName = "ning";
});
