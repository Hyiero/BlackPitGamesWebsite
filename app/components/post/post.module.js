var postController = require('./post.controller');
var postService = require('./post.service');

angular.module('post',[])
    .controller('postController',postController)
    .factory('postService',postService);