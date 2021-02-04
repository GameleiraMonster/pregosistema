import User from "../models/User";
import { getRepository } from "typeorm";
import { hash } from "bcryptjs";

interface Request {
  nome: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({ nome, email, password }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    if (!nome || nome.length == 0) {
      throw new Error("Nome inválido");
    }

    if (!email || email.length == 0) {
      throw new Error("E-mail inválido");
    }

    const checkUserExist = await usersRepository.findOne({
      where: { email },
    });
    if (checkUserExist) {
      throw new Error("Já existe um usuário com esse email.");
    }

    if (password.length < 6 || !password) {
      throw new Error("Senha inválida");
    }

    const hashedPassword = await hash(password, 8);

    const user = usersRepository.create({
      nome,
      email,
      password: hashedPassword,
    });

    await usersRepository.save(user);
    return user;
  }
}

export default CreateUserService;
