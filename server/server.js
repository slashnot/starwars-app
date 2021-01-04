// server.js
const jsonServer = require('json-server')
const path = require('path')

const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()

server.use(middlewares)

// Custom routes
server.use(jsonServer.rewriter({
    '/api/*': '/$1',
    // '/blog/:resource/:id/show': '/:resource/:id'
}))

router.render = (req, res) => {
    res.jsonp({
        count: res.locals.data.length,
        results: res.locals.data
    })
}


server.use(router)
server.listen(8000, () => {
    console.log('JSON Server is running at port 8000')
})