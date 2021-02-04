import { Router } from "express";
import createUserService from "../services/createUserService";

const usersRoutes = Router();

usersRoutes.post("/", async (request, response) => {
  try {
    const { nome, email, password } = request.body;
    const createUser = new createUserService();

    const user = await createUser.execute({
      nome,
      email,
      password,
    });

    return response.status(201).json(user);
  } catch (err) {
    return response.status(404).json({ message: err.message });
  }
});

export default usersRoutes;
