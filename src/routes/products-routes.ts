import { Router } from "express"
import { myMiddleware } from "../middlewares/my-middlewares"

const productsRoutes = Router()

productsRoutes.get("", (request, response) => {

    response.send("Hello world")
})

productsRoutes.post("", myMiddleware, (request, response) => {
    const { name, price } = request.body

    response.json({ name, price })
})

export { productsRoutes }