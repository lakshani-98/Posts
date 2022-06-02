const postController = require("../controllers/posts.controller");

var express = require("express");

var router = express.Router();

router.post("/add-post", postController.addPost);

/**
 * @swagger
 * /posts/add-post:
 *   post:
 *      description: Used to add post
 *      tags:
 *          - posts
 *      parameters:
 *          - in: body
 *            name: Post
 *            description: Post data
 *            schema:
 *              type: object
 *              required:
 *                 - description
 *                 - imagePath
 *                 - addedByUserId
 *              properties:
 *                  description:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 1000
 *                      example: Sample post
 *                  imagePath:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 1000
 *                      example: image1.png
 *                  addedByUserId:
 *                      type: integer
 *                      example: 1
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.get("/get-all-posts", postController.getAllPosts);
/**
 * @swagger
 * /posts/get-all-posts:
 *   get:
 *      description: Used to get all posts
 *      tags:
 *          - posts
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

 router.post("/add-post-comment", postController.addPostComment);
 /**
 * @swagger
 * /posts/add-post-comment:
 *   post:
 *      description: Used to add post comment
 *      tags:
 *          - posts
 *      parameters:
 *          - in: body
 *            name: Comment
 *            description: Post Comment
 *            schema:
 *              type: object
 *              required:
 *                 - postId
 *                 - comment
 *                 - addedByUserId
 *              properties:
 *                  postId:
 *                      type: integer
 *                      example: 1
 *                  comment:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 1000
 *                      example: This is sample comment
 *                  addedByUserId:
 *                      type: integer
 *                      example: 1
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */


module.exports = router;