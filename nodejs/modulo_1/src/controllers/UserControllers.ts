import { Request, Response } from 'express'


function idade (req: Request, res: Response){
    
    res.status(200).render('pages/idade')
}

const HomeControllers = {
    idade
}

function mostrarIdade (req: Request, res: Response){
    const { ano } = req.body
    let isValid : Boolean = false
    const anoAtual : number = 2022

    const idade : Number = anoAtual - ano
    
   
    console.log(isValid)
    res.status(200).render('pages/idade', {
        idade
    })
}

const UserControllers = {
    idade,
    mostrarIdade
}

export default UserControllers