import express from 'express'
import {
  getComments,
  getCommentById,
  createComment,
  updateComment,
  deleteComment
} from '../controllers/comments.controller.js'

const router = express.Router()

/**
 * @swagger
 * /comments:
 *   get:
 *     summary: Get all comments
 *     description: Endpoint to get all comments.
 *     responses:
 *       '200':
 *         description: Successful response
 *       '500':
 *         description: Server error
 */
router.get('/', getComments)

/**
 * @swagger
 * /comments/{id}:
 *   get:
 *     summary: Get comment by ID
 *     description: Endpoint to get a comment by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the comment to get
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Comment found
 *       '404':
 *         description: Comment not found
 *       '500':
 *         description: Server error
 */
router.get('/:id', getCommentById)

/**
 * @swagger
 * /comments:
 *   post:
 *     summary: Create a new comment
 *     description: Endpoint to create a new comment.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               postId:
 *                 type: integer
 *                 description: ID of the post the comment belongs to
 *               content:
 *                 type: string
 *                 description: The content of the comment
 *             required:
 *               - postId
 *               - content
 *     responses:
 *       '201':
 *         description: Comment created successfully
 *       '500':
 *         description: Server error
 */
router.post('/', createComment)

/**
 * @swagger
 * /comments/{id}:
 *   put:
 *     summary: Update comment by ID
 *     description: Endpoint to update a comment by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the comment to update
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *                 description: The new content of the comment
 *             required:
 *               - content
 *     responses:
 *       '200':
 *         description: Comment updated successfully
 *       '404':
 *         description: Comment not found
 *       '500':
 *         description: Server error
 */
router.put('/:id', updateComment)

/**
 * @swagger
 * /comments/{id}:
 *   delete:
 *     summary: Delete comment by ID
 *     description: Endpoint to delete a comment by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the comment to delete
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Comment deleted successfully
 *       '404':
 *         description: Comment not found
 *       '500':
 *         description: Server error
 */
router.delete('/:id', deleteComment)

export default router
