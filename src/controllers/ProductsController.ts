import { Request, Response } from "express"
import { AppError } from "../utils/AppError"
import { z } from 'zod'

class ProductsController {
    index(request: Request, response: Response) {
        const { page, limit } = request.query

        response.send(`${page} ${limit}`)
    }

    create(request: Request, response: Response) {
        const bodySchema = z.object({
            name: z.string({ error: "Nome é obrigatório" }),
            price: z.number({ error: "Preço é obrigatório" }),
        })

        const { name, price } = bodySchema.parse(request.body)

        if (!name || !price) {
            throw new AppError("Nome e preço do produto é obrigatório!", 400)
        }

        response.json({ name, price })
    }
}

export { ProductsController }