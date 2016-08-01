/**
 * Created by ningrunting on 2016/7/15.
 */
var app = angular.module('myApp', []);
app.controller('myController', function($scope, $interpolate){
    $scope.to = 'ari@fullstack.io';
    $scope.emailBody = 'Hello {{ to }},\n\nMy name is Ari too!';
    //设置监听
    $scope.$watch('emailBody', function(body){
        if (body)
        {
            var template = $interpolate(body);
            $scope.previewText = template({to:$scope.to});
        }
    })
});