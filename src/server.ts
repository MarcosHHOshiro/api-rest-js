import express from "express"

const app = express()
app.use(express.json())

app.get("/product/:id/:user", (request, response) => {
    const { id, user } = request.params

    response.send("Hello world")
})

app.post("/product", (request, response) => {
    const { name, price } = request.body

    response.send("Hello world")
})


app.listen(3333, () => console.log("Server is running"))