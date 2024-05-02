import express from 'express'
import {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost
} from '../controllers/posts.controller.js'

const router = express.Router()

/**
 * @swagger
 * /posts:
 *   get:
 *     summary: Get all posts
 *     description: Endpoint to get all posts.
 *     responses:
 *       '200':
 *         description: Successful response
 *       '500':
 *         description: Server error
 */
router.get('/', getPosts)

/**
 * @swagger
 * /posts/{id}:
 *   get:
 *     summary: Get post by ID
 *     description: Endpoint to get a post by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the post to get
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Post found
 *       '404':
 *         description: Post not found
 *       '500':
 *         description: Server error
 */
router.get('/:id', getPostById)

/**
 * @swagger
 * /posts:
 *   post:
 *     summary: Create a new post
 *     description: Endpoint to create a new post.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the post
 *               content:
 *                 type: string
 *                 description: The content of the post
 *             required:
 *               - title
 *               - content
 *     responses:
 *       '201':
 *         description: Post created successfully
 *       '500':
 *         description: Server error
 */
router.post('/', createPost)

/**
 * @swagger
 * /posts/{id}:
 *   put:
 *     summary: Update post by ID
 *     description: Endpoint to update a post by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the post to update
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The new title of the post
 *               content:
 *                 type: string
 *                 description: The new content of the post
 *             required:
 *               - title
 *               - content
 *     responses:
 *       '200':
 *         description: Post updated successfully
 *       '404':
 *         description: Post not found
 *       '500':
 *         description: Server error
 */
router.put('/:id', updatePost)

/**
 * @swagger
 * /posts/{id}:
 *   delete:
 *     summary: Delete post by ID
 *     description: Endpoint to delete a post by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the post to delete
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Post deleted successfully
 *       '404':
 *         description: Post not found
 *       '500':
 *         description: Server error
 */
router.delete('/:id', deletePost)

export default router
