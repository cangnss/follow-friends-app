import { Router } from "express"
import { AppDataSource } from "../data-source";
import { UsersController } from "../controllers/UsersController";

const userRouter = Router();
const usersController = new UsersController()

userRouter.get("/", usersController.allUsers)


export default userRouter;