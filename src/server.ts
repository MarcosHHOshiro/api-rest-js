import express from "express"
import { myMiddleware } from "./middlewares/my-middlewares"

const app = express()
app.use(express.json())

app.use(myMiddleware)

app.get("/product/:id/:user", (request, response) => {
    const { id, user } = request.params

    response.send("Hello world")
})

app.post("/product", (request, response) => {
    const { name, price } = request.body

    response.json({ name, price })
})


app.listen(3333, () => console.log("Server is running"))