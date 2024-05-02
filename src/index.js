import express from 'express'
import { PORT } from './config/config.js'
import usersRoutes from './routes/users.routes.js'
import postsRoutes from './routes/posts.routes.js'
import categoriesRoutes from './routes/categories.routes.js'
import commentsRoutes from './routes/comments.routes.js'
import searchesRoutes from './routes/searches.routes.js'
import swaggerUi from 'swagger-ui-express'
import swaggerJsdoc from 'swagger-jsdoc'

const app = express()

// Middleware
app.use(express.json())

// Routes
app.use('/users', usersRoutes)
app.use('/posts', postsRoutes)
app.use('/categories', categoriesRoutes)
app.use('/comments', commentsRoutes)
app.use('/searches', searchesRoutes)

// Swagger setup
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Interactive Blogging API',
      version: '1.0.0',
      description: 'RESTful API for an interactive blogging platform'
    },
    servers: [
      {
        url: `http://localhost:${PORT}`
      }
    ]
  },
  apis: ['./src/routes/*.js'] // Paths where endpoints are defined
}

const swaggerSpec = swaggerJsdoc(swaggerOptions)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

// Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
