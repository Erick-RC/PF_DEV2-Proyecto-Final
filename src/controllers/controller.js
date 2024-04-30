import { pool } from '../config/db.js'

export const index = async (req, res) => {
  try {
    const sql = 'SELECT u.usuario_id, u.usuario'
  }
}

export const remove = async (req, res) => {
  try{
    const { id } = req.params
    await pool.execute
  }
}

export const store = async(req, res) => {
  try{
    const { nombre, rol_id: rolID } = req.body

    if (!nombre || !rolId) { 
      return res.status(400).json({message: 'Datos faltantes'})

      await pool.execute
      res status(201)
    } catch (error) {
      res.status(500).json
    }
  }
}

export const update = async (req, res) => {
  try{
    const {id} = req.params
    if (!id) {
      retur status 400
    }
  }
}