/**
 * Created by glcsnz123 on 2016/5/22.
 */
var myModule = angular.module('starter');

myModule.directive('cemfb', function () {
  return {
    restrict: 'ECMA',
    scope: {
      user: '=',
      toUser: '=',
      messages: "=",
      sendMsg: "&",
      viewProfile: "&",
    },
    templateUrl: 'templates/directiveTpl/ce.mfb.tpl.html',
    transclude: true,
    controller: function ($scope, $state, $ionicHistory, mindwaveService, amodelService) {
      $scope.cemfb_model = {
        isEnabled: true,
        menuState: 'close',
        isHide: false,
        marginRightCss: "margin-right: 10px;",
      };
      $scope.cemfb_mainClicked = function () {
        if ($scope.cemfb_model.isHide) {
          $scope.cemfb_model.menuState = "close";
          $scope.cemfb_model.isHide = false;
          $scope.cemfb_model.marginRightCss = "margin-right: 10px;";
          return;
        }
      };
      $scope.cemfb_hideClicked = function () {
        $scope.cemfb_model.isHide = true;
        $scope.cemfb_model.menuState = "close";
        setTimeout(function () {
          $scope.cemfb_model.marginRightCss = "margin-right: -30px;";
          $scope.$apply();
        }, 100);
      };
      $scope.cemfb_voiceAssiant = function () {
        $state.go("soundhelp");

        /*mindwaveService.getMicrophoneDate();

        var args = mindwaveService.getSentence();
       // var args = "我是中国人。";

        amodelService.analyse(
            function(data){
              alert(data);
            }, args
          );*/

       // $scope.cemfb_model.menuState = "close";

      };
      $scope.cemfb_backToHome = function () {
        $ionicHistory.clearHistory();
        $state.go("main.service");
      };
    }
  };
});
