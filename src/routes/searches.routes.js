import express from 'express'

const router = express.Router()

/**
 * @swagger
 * /searches:
 *   get:
 *     summary: Search posts by title
 *     description: Endpoint to search posts by title.
 *     parameters:
 *       - in: query
 *         name: title
 *         required: true
 *         description: Title keyword to search for
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successful response
 *       '500':
 *         description: Server error
 */
router.get('/', (req, res) => {
  const { title } = req.query
  // Implement search logic here
  res.status(200).json({ message: `Search results for title: ${title}` })
})

export default router
