/**
 * Created by ningrunting on 2016/7/14.
 */
/*function myController ($scope,$timeout) {
    var updateClock = function (){
        $scope.clock = new Date();
        $timeout(function () {
            updateClock();
        },1000);
    }
    updateClock();*/

    //运用对象的属性进行数据绑定 但不提倡使用$scope.$apple方法，提倡用$timeout原因不是很理解
    function myController ($scope) {
        $scope.clock = {
            now: new Date()
        };
        var updateClock = function() {
            $scope.clock.now = new Date();
        };
        setInterval(function () {
            $scope.$apply(updateClock());
        },1000);
        updateClock();
    }

