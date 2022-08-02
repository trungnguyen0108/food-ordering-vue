const productsRouter = require('./movies')

function route(app) {
    app.use('/api', productsRouter)
}

module.exports = route