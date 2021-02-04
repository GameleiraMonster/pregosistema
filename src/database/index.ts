//arquivo onde vai se refeito a conexão com o banco de dados

import { createConnection } from "typeorm";

//vai procurar em todo o projeto ormconfig.json, vai ler o arquivo e vai fazer a conexão
createConnection();
