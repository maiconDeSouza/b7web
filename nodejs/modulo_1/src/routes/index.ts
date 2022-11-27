const router = require('express').Router()
import { Request, Response } from 'express'

import HomeControllers from '../controllers/HomeControllers'
import UserControllers from '../controllers/UserControllers'

router.get('/', HomeControllers.getProducts)

router.get('/sobre', HomeControllers.sobre)

router.get('/nome', (req: Request, res: Response) => {
    const { name } = req.query
    res.status(200).render('pages/nome', {
        name
    })
})

router.get('/idade', UserControllers.idade)

router.post('/mostrar-idade', UserControllers.mostrarIdade)



export default router