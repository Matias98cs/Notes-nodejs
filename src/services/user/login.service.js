import errorsHelper from "../../helpers/errors.helper.js";
import getPool from "../../db/getPool.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const main = async (user) => {
  try {
    //conectar
    const pool = await getPool();
    // buscamos usuario
    const sqlQuery = "SELECT * FROM users WHERE email = ?";
    const values = [user.email];
    const [users] = await pool.query(sqlQuery, values);
    if (users.length == 0)
      errorsHelper.notFoundError("Usuario no encontrado", "USER_NOT_FOUND");

    const validation = await bcrypt.compare(user.password, users[0].password);

    if (!validation)
      errorsHelper.notAuthorizedError(
        "Password incorrecta",
        "PASSWORD_INCORRECT"
      );

    const tokenInfo = {
      id: users[0].id,
    };

    const token = jwt.sign(tokenInfo, process.env.SECRET_KEY, {
      expiresIn: process.env.EXPIRE_TOKEN,
    });
    // respuesta
    return token;
  } catch (error) {
    errorsHelper.internalServerError(error.message, "CREATE_USER_ERROR");
  }
};

export default main;
