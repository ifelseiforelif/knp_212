import { Sequelize } from "sequelize-typescript";
import { Category } from "../models/category-model";

// export const connection = new Sequelize({
//   dialect: "postgres",
//   host: "localhost",
//   port: 5432,
//   username: "postgres",
//   password: "simple",
//   database: "knp212",
//   models: [Category], //TODO:винести в .env
// });

export const connection = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "knp212",
  models: [Category], //TODO:винести в .env
});
