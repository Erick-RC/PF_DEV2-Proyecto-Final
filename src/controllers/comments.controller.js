// Import any necessary modules or database connections
import { pool } from '../config/db.js'

// Function to get all comments
export const getComments = async (req, res) => {
  try {
    const comments = await pool.query('SELECT * FROM comments')
    res.status(200).json(comments)
  } catch (error) {
    console.error('Error getting comments:', error)
    res.status(500).json({ message: 'Server error' })
  }
}

// Function to get a comment by ID
export const getCommentById = async (req, res) => {
  const { id } = req.params
  try {
    const comment = await pool.query('SELECT * FROM comments WHERE id = ?', [id])
    if (comment.length > 0) {
      res.status(200).json(comment[0])
    } else {
      res.status(404).json({ message: 'Comment not found' })
    }
  } catch (error) {
    console.error('Error getting comment by ID:', error)
    res.status(500).json({ message: 'Server error' })
  }
}

// Function to create a new comment
export const createComment = async (req, res) => {
  const { postId, content } = req.body
  try {
    await pool.query('INSERT INTO comments (postId, content) VALUES (?, ?)', [postId, content])
    res.status(201).json({ message: 'Comment created successfully' })
  } catch (error) {
    console.error('Error creating comment:', error)
    res.status(500).json({ message: 'Server error' })
  }
}

// Function to update a comment by ID
export const updateComment = async (req, res) => {
  const { id } = req.params
  const { content } = req.body
  try {
    await pool.query('UPDATE comments SET content = ? WHERE id = ?', [content, id])
    res.status(200).json({ message: 'Comment updated successfully' })
  } catch (error) {
    console.error('Error updating comment:', error)
    res.status(500).json({ message: 'Server error' })
  }
}

// Function to delete a comment by ID
export const deleteComment = async (req, res) => {
  const { id } = req.params
  try {
    await pool.query('DELETE FROM comments WHERE id = ?', [id])
    res.status(200).json({ message: 'Comment deleted successfully' })
  } catch (error) {
    console.error('Error deleting comment:', error)
    res.status(500).json({ message: 'Server error' })
  }
}
