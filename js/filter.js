/**
 * Created by ningrunting on 2016/7/15.
 */
var app = angular.module('myApp', []);
app.controller('myController', function($scope){
    $scope.text = 'ginger loves dog treats';
})
app.filter('capitalize', function(){
    return function(input){
        if (input)
        {
            return input[0].toUpperCase() + input.slice(1);
        }
    }
})