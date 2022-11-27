import { Request, Response } from 'express'
import ProductList from '../models/ProductList'
import FrasesList from '../models/FrasesList'

function getProducts(req:Request, res:Response) {
    const user = 'Mbappe'
    
    
    res.status(200).render('pages/home', {
        user,
        showWelcome: true,
        products : ProductList.allList(),
        products12: ProductList.priceList(12),
        frases : FrasesList.allList(),
        title: "Home"
    })
}

function sobre(req: Request, res: Response){
    res.status(200).render('pages/sobre',{
        title: "Sobre"
    })
}

const HomeControllers = {
    getProducts,
    sobre
}

export default HomeControllers