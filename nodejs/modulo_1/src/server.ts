import express, {Request, Response} from 'express'
import mustache from 'mustache-express'

import path from 'path'

import router from './routes'

const app = express()
const pathPublic = path.join(__dirname,'../', 'public')
const pathViews = path.join(__dirname, 'views')

app.set('view engine', 'mustache')
app.set('views', pathViews)
app.engine('mustache', mustache())

app.use(express.static(pathPublic))

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(router)

app.use((req: Request, res: Response) => {
    res.json({
        message: `404`
    })
})


const port = 1992
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))