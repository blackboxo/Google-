angular.module('starter.controllers', [])

  .controller('homeCtrl', function ($scope, $timeout, $http) {

    $http({
      url: "php.php",
      method: "POST"
    })
    //.then Promise/deferred
      .then(function (arr) {
        $scope.array = arr;

      });
  })

  .controller('searchCtrl', function ($scope) {
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
