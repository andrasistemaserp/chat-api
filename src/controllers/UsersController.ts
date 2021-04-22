import { Request, Response } from "express";
import { UsersService } from "../services/UsersService";

class UsersController {

  //o Promise<Response> significa que deve haver um retorno "Response"
  
  async create(req: Request, res: Response): Promise<Response> {

    const { email } = req.body;

    const usersService = new UsersService();

    const user = await usersService.create({ email });

    return res.json(user);

  }

}

export { UsersController }