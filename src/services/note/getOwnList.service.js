import errorsHelper from "../../helpers/errors.helper.js";
import getPool from "../../db/getPool.js";

const main = async (userId) => {
  try {
    const pool = await getPool();
    const sqlQuery = "SELECT title FROM notes WHERE userId = ?";
    const values = [userId];
    const [notes] = await pool.query(sqlQuery, values);
    return notes;
  } catch (error) {
    errorsHelper.internalServerError(error.message, "CREATE_USER_ERROR");
  }
};

export default main;
