import express from "express"

const app = express()

app.get("/product/:id/:user", (request, response) => {
    const { id, user } = request.params

    response.send("Hello world")
})

app.listen(3333, () => console.log("Server is running"))