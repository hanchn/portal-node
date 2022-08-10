import express from 'express'
import Router from '../routes/Router.js'
import cors from 'cors'
import FileUpload from 'express-fileupload'
import config from '../config/config.js'
// nodejs 
const app = express()

app.use(FileUpload())
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cors())
Router(app)

app.listen(config.env, () => {
    console.log(`success on port ${config.env} !`)
})