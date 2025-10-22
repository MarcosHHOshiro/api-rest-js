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
            name: z.string({ error: "Name is required!" }).trim()
                .min(6, { message: "Name musyt be at least 6 characters long" }),
            price: z.number({ error: "Price is required" }).positive({ message: "Price must be positive" }),
        })

        const { name, price } = bodySchema.parse(request.body)

        if (!name || !price) {
            throw new AppError("Nome e preço do produto é obrigatório!", 400)
        }

        response.json({ name, price })
    }
}

export { ProductsController }