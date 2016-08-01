/**
 * Created by ningrunting on 2016/7/18.
 */
var myApp = angular.module('myApp', []);

myApp.directive('myDirective', function(){
    return {
        restrict:'E',
        template:'<a href="http://www.badiu.com">百度一下</a>',
        replace:true
    };
});
