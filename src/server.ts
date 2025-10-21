import express, { Request, Response, NextFunction } from "express"
import { routes } from "./routes"

const app = express()
app.use(express.json())

app.use(routes)

app.use((error: any, request: Request, response: Response, _: NextFunction) => {
    response.status(500).json({ message: "Erro no servidor" })
})

app.listen(3333, () => console.log("Server is running"))