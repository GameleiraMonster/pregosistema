import { Router} from "express";
import createUserService from "../services/createUserService";

const usersRoutes = Router();

usersRoutes.post("/", async (request, response) => {
    
    const {nome, email, password} = request.body;
    console.log(nome)
    console.log(email)
    console.log(password)
    /*const createUser = new createUserService();

    const user = await createUser.execute({
        nome,
        email,
        password
    })*/

   // return response.status(201).json(user);
})

export default usersRoutes;