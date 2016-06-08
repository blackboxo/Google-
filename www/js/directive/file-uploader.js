angular.module('starter')
  .directive('fileUploader', function ($q) {
    return {
      restrict: 'AE',
      replace: true,
      template: '<input type="file" multiple class="file-loading" accept="image/*">',
      scope: {
        data: '=',
        delegate: '='
      },

      link: function (scope, element, attrs) {

        var batchUploadDeferred = null;
        var $element = $(element);

        $element.fileinput({
          uploadUrl: "http://121.42.29.139/Google-/www/templates/upload-image.php",
          allowedFileExtensions: ["jpg", "png", "gif"],
          minImageWidth: 50,
          minImageHeight: 50,
          maxFileCount: 9,
          showUpload:false,
          previewSettings:{
            image: {width: "auto", height: "auto"}},
          previewZoomButtonIcons:{
            remove: "<br><i class=\"glyphicon glyphicon-trash\" style=\"font-size:50px\">\n\n</i> ",
          }
        });

        scope.delegate.doUpload = function () {
          $element.fileinput('upload');
          batchUploadDeferred = $q.defer();
          return batchUploadDeferred.promise;
        };

        $element.on('fileuploaded', function (event, data, previewId, index) {
          var response = data.response;
          scope.data.push(response.dest);
          scope.delegate.fileUploaded(response.dest);
        });

        $element.on('filebatchuploadcomplete', function (event, data, previewId, index) {
          if (!!batchUploadDeferred) batchUploadDeferred.resolve();
        });


      }
    }
  });
