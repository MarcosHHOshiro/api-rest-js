import { Request, Response } from "express"

class ProductsController {
    index(request: Request, response: Response) {
        const { page, limit } = request.query

        response.send(`${page} ${limit}`)
    }

    create(request: Request, response: Response) {
        const { name, price } = request.body

        throw new Error("Erro de Exemplo")

        response.json({ name, price })
    }
}

export { ProductsController }