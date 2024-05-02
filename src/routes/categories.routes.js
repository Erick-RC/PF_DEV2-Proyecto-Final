import express from 'express';
import {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
} from '../controllers/categories.controller.js';

const router = express.Router();

/**
 * @swagger
 * /categories:
 *   get:
 *     summary: Get all categories
 *     description: Endpoint to get all categories.
 *     responses:
 *       '200':
 *         description: Successful response
 *       '500':
 *         description: Server error
 */
router.get('/', getCategories);

/**
 * @swagger
 * /categories/{id}:
 *   get:
 *     summary: Get category by ID
 *     description: Endpoint to get a category by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the category to get
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Category found
 *       '404':
 *         description: Category not found
 *       '500':
 *         description: Server error
 */
router.get('/:id', getCategoryById);

/**
 * @swagger
 * /categories:
 *   post:
 *     summary: Create a new category
 *     description: Endpoint to create a new category.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the category
 *             required:
 *               - name
 *     responses:
 *       '201':
 *         description: Category created successfully
 *       '500':
 *         description: Server error
 */
router.post('/', createCategory);

/**
 * @swagger
 * /categories/{id}:
 *   put:
 *     summary: Update category by ID
 *     description: Endpoint to update a category by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the category to update
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The new name of the category
 *             required:
 *               - name
 *     responses:
 *       '200':
 *         description: Category updated successfully
 *       '404':
 *         description: Category not found
 *       '500':
 *         description: Server error
 */
router.put('/:id', updateCategory);

/**
 * @swagger
 * /categories/{id}:
 *   delete:
 *     summary: Delete category by ID
 *     description: Endpoint to delete a category by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the category to delete
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Category deleted successfully
 *       '404':
 *         description: Category not found
 *       '500':
 *         description: Server error
 */
router.delete('/:id', deleteCategory);

export default router;
