import todoRouter from './todo.routes.js'


const routes = (app) => {
    app.use('/todo', todoRouter)
}
export default routes