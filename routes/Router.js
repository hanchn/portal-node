import Menu from './Login.js'
import Role from './Article.js'
import User from './User.js'
import UserMenu from './Performance.js'
import { app_404, app_500 } from './Error.js'

const routes = {
    Menu,
    Role,
    User,
    UserMenu
}


// 所有包含 二级分类的下发
const mapAllRoutes = (app) =>
    new Promise((reslove) => {
        Object.entries(routes).map((item, key) => {
            app.use(`/${item[0]}`, item[1])
            if (key === Object.keys(routes).length - 1) {
                reslove(true)
            }
        })

    })


export default async(app) => {
    // app.all(...Login)
    await mapAllRoutes(app)
    app.use(app_404)
    app.use(app_500)
}