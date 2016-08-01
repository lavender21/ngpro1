/**
 * Created by ningrunting on 2016/7/15.
 */
var UserForm = angular.module('UserForm', []);

UserForm.controller('UserController', ['$scope',
    function ($scope) {
        $scope.UserInfo =   {
            email:'123456@123.com',
            password:'123456',
            autoLogin:true
        };
        //获取表单的值
        $scope.getFormData = function(){
            console.log($scope.UserInfo);
        };
        //设置表单的值
        $scope.setFormData = function(){
            $scope.UserInfo = {
                email:'ningrungting@123.com',
                password:'ningrungting',
                autoLogin:false
            }
        };

    }
]);