// import { createPool } from "mysql2/promise";
import sequelize from "sequelize"

const db = new sequelize("registro", "root", {
  host: "localhost",
  dialect: "mysql",
  port: 3306
})

//export const pool = createPool({
//  host: "localhost",
//  user: "root",
//  password: "",
//  port: 3306,
//  database: "registro",
//});

export default db