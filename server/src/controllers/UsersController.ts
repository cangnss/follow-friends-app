import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";

export class UsersController{
    private userRepository = AppDataSource.getRepository(User);

    allUsers = async (req:Request, res: Response) => {
        const users = this.userRepository.find();
        return res.status(200).send(users);
    }
}