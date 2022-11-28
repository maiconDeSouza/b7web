import { Request, Response } from "express"

export function home(req: Request, res: Response){
    res.status(200).render('pages/page', {
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        }
    })
}

export function dogs(req: Request, res: Response){
    
}

export function cats(req: Request, res: Response){
    
}

export function fishes(req: Request, res: Response){
    
}