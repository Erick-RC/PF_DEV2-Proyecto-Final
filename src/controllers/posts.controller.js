import db from '../config/db.js'

// Get all posts
export const getPosts = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM posts')
    res.status(200).json(rows)
  } catch (err) {
    res.status(500).json({ error: 'Error getting posts' })
  }
}

// Get post by ID
export const getPostById = async (req, res) => {
  const { id } = req.params
  try {
    const [rows] = await db.query('SELECT * FROM posts WHERE id = ?', [id])
    if (rows.length > 0) {
      res.status(200).json(rows[0])
    } else {
      res.status(404).json({ error: 'Post not found' })
    }
  } catch (err) {
    res.status(500).json({ error: 'Error getting post' })
  }
}

// Create a new post
export const createPost = async (req, res) => {
  const { title, content } = req.body
  try {
    await db.query('INSERT INTO posts (title, content) VALUES (?, ?)', [title, content])
    res.status(201).json({ message: 'Post created successfully' })
  } catch (err) {
    res.status(500).json({ error: 'Error creating post' })
  }
}

// Update post by ID
export const updatePost = async (req, res) => {
  const { id } = req.params
  const { title, content } = req.body
  try {
    await db.query('UPDATE posts SET title = ?, content = ? WHERE id = ?', [title, content, id])
    res.status(200).json({ message: 'Post updated successfully' })
  } catch (err) {
    res.status(500).json({ error: 'Error updating post' })
  }
}

// Delete post by ID
export const deletePost = async (req, res) => {
  const { id } = req.params
  try {
    await db.query('DELETE FROM posts WHERE id = ?', [id])
    res.status(200).json({ message: 'Post deleted successfully' })
  } catch (err) {
    res.status(500).json({ error: 'Error deleting post' })
  }
}
