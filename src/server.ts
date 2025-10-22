import express, { Request, Response, NextFunction } from "express"
import { ZodError,z } from "zod"

import { routes } from "./routes"
import { AppError } from "./utils/AppError"

const app = express()
app.use(express.json())

app.use(routes)

app.use((error: any, request: Request, response: Response, _: NextFunction) => {
    if (error instanceof AppError) {
        return response.status(error.statusCode).json({ message: error.message })
    }

    if (error instanceof ZodError) {
        response.status(400).json({
            message: "Validation error",
            issues: z.treeifyError(error),
        })
    }

    response.status(500).json({ message: error.message })
})

app.listen(3333, () => console.log("Server is running"))