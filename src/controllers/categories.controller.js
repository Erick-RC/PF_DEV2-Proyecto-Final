// Import any necessary modules or database connections
import { pool } from '../config/db.js'

// Function to get all categories
export const getCategories = async (req, res) => {
  try {
    const categories = await pool.query('SELECT * FROM categories')
    res.status(200).json(categories)
  } catch (error) {
    console.error('Error getting categories:', error)
    res.status(500).json({ message: 'Server error' })
  }
}

// Function to get a category by ID
export const getCategoryById = async (req, res) => {
  const { id } = req.params
  try {
    const category = await pool.query('SELECT * FROM categories WHERE id = ?', [id])
    if (category.length > 0) {
      res.status(200).json(category[0])
    } else {
      res.status(404).json({ message: 'Category not found' })
    }
  } catch (error) {
    console.error('Error getting category by ID:', error)
    res.status(500).json({ message: 'Server error' })
  }
}

// Function to create a new category
export const createCategory = async (req, res) => {
  const { name } = req.body
  try {
    await pool.query('INSERT INTO categories (name) VALUES (?)', [name])
    res.status(201).json({ message: 'Category created successfully' })
  } catch (error) {
    console.error('Error creating category:', error)
    res.status(500).json({ message: 'Server error' })
  }
}

// Function to update a category by ID
export const updateCategory = async (req, res) => {
  const { id } = req.params
  const { name } = req.body
  try {
    await pool.query('UPDATE categories SET name = ? WHERE id = ?', [name, id])
    res.status(200).json({ message: 'Category updated successfully' })
  } catch (error) {
    console.error('Error updating category:', error)
    res.status(500).json({ message: 'Server error' })
  }
}

// Function to delete a category by ID
export const deleteCategory = async (req, res) => {
  const { id } = req.params
  try {
    await pool.query('DELETE FROM categories WHERE id = ?', [id])
    res.status(200).json({ message: 'Category deleted successfully' })
  } catch (error) {
    console.error('Error deleting category:', error)
    res.status(500).json({ message: 'Server error' })
  }
}
