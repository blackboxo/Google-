angular.module('starter.controllers', [])

  .controller("LoginCtrl", function ($scope, $state) {

  })

  .controller("Sign_upCtrl", function ($scope, $state) {

  })


  .controller('homeCtrl', function ($scope, $timeout, $http) {

    $http({
      url: "http://121.42.29.139/Google-/www/templates/php.php",
      method: "POST",
      data: {"username": "depkin"}
    })
    //.then Promise/deferred
      .then(function (arr) {
        $scope.array = arr.data;
        console.log($scope.array);
      });
    $scope.doRefresh = function () {
      $http({
        url: "http://121.42.29.139/Google-/www/templates/php.php",
        method: "POST",
        data: {"username": "depkin"}
      })
      //.then Promise/deferred
        .then(function (arr) {
          $scope.array = arr.data;
          console.log($scope.array);
        });
      // Stop the ion-refresher from spinning
      $scope.$broadcast('scroll.refreshComplete');
    };

  })

  .controller('postDetailCtrl', function ($scope, $stateParams, Posts) {
    $scope.post = Posts.get($stateParams.postId);
    $scope.color = null;
    $scope.changeColor = function () {
      if ($scope.color == null)
        $scope.color = "assertive";
      else if ($scope.color == "assertive")
        $scope.color = null;
    }
  })

  .controller('postWriteCtrl', function ($scope) {

  })

  .controller('categoriesCtrl', function ($scope, $cordovaImagePicker, $ionicActionSheet) {

    $scope.images_list = [];

    // "添加附件"Event
    $scope.addAttachment = function () {
      //nonePopover();
      $ionicActionSheet.show({
        buttons: [
          {text: '相机'},
          {text: '图库'}
        ],
        cancelText: '关闭',
        cancel: function () {
          return true;
        },
        buttonClicked: function (index) {

          switch (index) {

            case 0:
              appendByCamera();
              break;
            case 1:

              pickImage();
              break;
            default:
              break;
          }
          return true;
        }
      });
    }


    //image picker
    var pickImage = function () {


      var options = {
        maximumImagesCount: 10,
        width: 800,
        height: 800,
        quality: 80
      };

      $cordovaImagePicker.getPictures(options)
        .then(function (results) {
          for (var i = 0; i < results.length; i++) {
            $scope.images_list.push(results[i]);
          }
        }, function (error) {
          // error getting photos
        });

    }

  })

  .controller("categoryDetailCtrl", function ($scope,$stateParams,Categories) {
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
    $scope.categories = Categories.all();
  })

  .controller('chatsCtrl', function ($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.chats = Chats.all();
    $scope.remove = function (chat) {
      Chats.remove(chat);
    };
  })


  .controller('chatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
  })

  .controller('accountCtrl', function ($scope, Posts) {
    $scope.posts = Posts.all();
    $scope.doRefresh = function () {
      $scope.posts = Posts.all();
      // Stop the ion-refresher from spinning
      $scope.$broadcast('scroll.refreshComplete');
    };
  });
