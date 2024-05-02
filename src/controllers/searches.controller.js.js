// Import any necessary modules or database connections
import { pool } from '../config/db.js'

// Function to search posts by title
export const searchPostsByTitle = async (req, res) => {
  const { title } = req.query
  try {
    const posts = await pool.query('SELECT * FROM posts WHERE title LIKE ?', [`%${title}%`])
    res.status(200).json(posts)
  } catch (error) {
    console.error('Error searching posts by title:', error)
    res.status(500).json({ message: 'Server error' })
  }
}
