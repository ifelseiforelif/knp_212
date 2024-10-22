"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const category_model_1 = require("../models/category-model");
// export const connection = new Sequelize({
//   dialect: "postgres",
//   host: "localhost",
//   port: 5432,
//   username: "postgres",
//   password: "simple",
//   database: "knp212",
//   models: [Category], //TODO:винести в .env
// });
exports.connection = new sequelize_typescript_1.Sequelize({
    dialect: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "knp212",
    models: [category_model_1.Category], //TODO:винести в .env
});
