import { Request, Response } from "express"
import { AppError } from "../utils/AppError"

class ProductsController {
    index(request: Request, response: Response) {
        const { page, limit } = request.query

        response.send(`${page} ${limit}`)
    }

    create(request: Request, response: Response) {
        const { name, price } = request.body

        if (!name || !price) {
            throw new AppError("Nome e preço do produto é obrigatório!", 400)
        }

        // throw new AppError("Erro de Exemplo", 400)

        response.json({ name, price })
    }
}

export { ProductsController }