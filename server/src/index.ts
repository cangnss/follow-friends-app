import * as express from "express"
import { Express, Request, Response } from "express"
import { AppDataSource } from "./data-source"
import bodyParser = require("body-parser")
import userRouter from "./routes/userRouter"
import { configDotenv } from "dotenv"

AppDataSource.initialize().then(async () => {
    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))

configDotenv()
const app: Express = express();

const port = process.env.PORT || 8000
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use("/users", userRouter)


app.get("/",async (req:Request, res:Response) => {
    return res.status(200).send("hi")
})

app.listen(port, ()=>{
    console.log(`Server is running http://localhost:${port}`);
})


