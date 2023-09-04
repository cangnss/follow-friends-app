import express, { Application, Express, Request, Response } from "express";
import dotenv from "dotenv"


dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

app.get("/", async (req:Request, res: Response) => {
    return res.status(200).send("hi")
})

app.listen(port, () => {
    console.log(`Server is running http://localhost:${port}`);
})