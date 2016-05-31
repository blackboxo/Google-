angular.module('starter.controllers', [])

  .controller("LoginCtrl", function ($scope, $state) {


  })

  .controller('homeCtrl', function ($scope, $timeout, $http, Posts) {

    //$http({
    //  url: "php.php",
    //  method: "POST"
    //})
    ////.then Promise/deferred
    //  .then(function (arr) {
    //    $scope.array = arr;
    //
    //  });
    $scope.posts = Posts.all();
    $scope.doRefresh = function () {
      $scope.posts = Posts.all();
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

  .controller('postWriteCtrl',function($scope){

  })

  .controller('searchCtrl', function ($scope, $cordovaImagePicker, $ionicActionSheet) {

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

  .controller('accountCtrl', function ($scope) {
    $scope.settings = {
      enableFriends: true
    };
  });
