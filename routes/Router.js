import Performance from './Performance.js'
import SiteInfo from './Siteinfo.js'
import { app_404, app_500 } from './Error.js'

const routes = {
    Performance,
    SiteInfo
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