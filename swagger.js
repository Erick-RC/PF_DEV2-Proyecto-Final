import swaggerJsdoc from 'swagger-jsdoc'

// Swagger options
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'FUNVAL Blogging API',
      version: '1.0.0',
      description: 'RESTful API for an interactive blogging platform'
    },
    servers: [
      {
        url: 'http://localhost:3000' // Update with your server URL
      }
    ]
  },
  apis: ['./src/routes/*.js'] // Paths where endpoints are defined
}

// Initialize Swagger-jsdoc
const swaggerSpec = swaggerJsdoc(swaggerOptions)

export default swaggerSpec
