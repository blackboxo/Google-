angular.module('starter.services', [])

  .factory('Chats', function () {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var chats = [{
      id: 0,
      name: 'Ben Sparrow',
      lastText: 'You on your way?',
      face: 'img/ben.png'
    }, {
      id: 1,
      name: 'Max Lynx',
      lastText: 'Hey, it\'s me',
      face: 'img/max.png'
    }, {
      id: 2,
      name: 'Adam Bradleyson',
      lastText: 'I should buy a boat',
      face: 'img/adam.jpg'
    }, {
      id: 3,
      name: 'Perry Governor',
      lastText: 'Look at my mukluks!',
      face: 'img/perry.png'
    }, {
      id: 4,
      name: 'Mike Harrington',
      lastText: 'This is wicked good ice cream.',
      face: 'img/mike.png'
    }];

    return {
      all: function () {
        return chats;
      },
      remove: function (chat) {
        chats.splice(chats.indexOf(chat), 1);
      },
      get: function (chatId) {
        for (var i = 0; i < chats.length; i++) {
          if (chats[i].id === parseInt(chatId)) {
            return chats[i];
          }
        }
        return null;
      }
    };
  })

  .factory('Categories', function () {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var categories = [{
      id: 0,
      avatar: "img/adam.jpg",
      title: "Adam Alternative",
      writer: "Photo Chaser",
      banner: "img/pic.jpeg",
      summary: "The first two sentences in the article or the summary of it or something else just test for long length.",
      likes: "1",
      comments: "5",
    },
      {
        id: 1,
        avatar: "img/adam.jpg",
        title: "Adam Alternative",
        writer: "Photo Chaser",
        banner: "img/slide_3.png",
        summary: "The first two sentences in the article or the summary of it or something else just test for long length.",
        likes: "1",
        comments: "5",
      },
      {
        id: 2,
        avatar: "img/adam.jpg",
        title: "Adam Alternative",
        writer: "Photo Chaser",
        banner: "img/slide_1.jpg",
        summary: "The first two sentences in the article or the summary of it or something else just test for long length.",
        likes: "1",
        comments: "5",
      }];

    return {
      all: function () {
        return categories;
      },
      remove: function (category) {
        categories.splice(categories.indexOf(category), 1);
      },
      get: function (categoryId) {
        for (var i = 0; i < categories.length; i++) {
          if (categories[i].id === parseInt(categoryId)) {
            return categories[i];
          }
        }
        return null;
      }
    };
  })


  .factory("Posts", function () {

    var posts = [{
      id: 0,
      avatar: "img/adam.jpg",
      title: "Adam Alternative",
      writer: "Photo Chaser",
      banner: "img/pic.jpeg",
      summary: "The first two sentences in the article or the summary of it or something else just test for long length.",
      likes: "1",
      comments: "5",
    },
      {
        id: 1,
        avatar: "img/adam.jpg",
        title: "Adam Alternative",
        writer: "Photo Chaser",
        banner: "img/slide_3.png",
        summary: "The first two sentences in the article or the summary of it or something else just test for long length.",
        likes: "1",
        comments: "5",
      },
      {
        id: 2,
        avatar: "img/adam.jpg",
        title: "Adam Alternative",
        writer: "Photo Chaser",
        banner: "img/slide_1.jpg",
        summary: "The first two sentences in the article or the summary of it or something else just test for long length.",
        likes: "1",
        comments: "5",
      }];

    return {
      all: function () {
        return posts;
      },
      remove: function (post) {
        posts.splice(posts.indexOf(post), 1);
      },
      get: function (postId) {
        for (var i = 0; i < posts.length; i++) {
          if (posts[i].id === parseInt(postId)) {
            return posts[i];
          }
        }
        return null;
      }
    };


  })
