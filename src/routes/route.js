import todoRouter from './todo.routes.js'


const routes = (app) => {
    app.use('/api/todo', todoRouter)
}
export default routes