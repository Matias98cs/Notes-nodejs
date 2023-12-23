import errorsHelper from "../../helpers/errors.helper.js";
import getPool from "../../db/getPool.js";

const main = async (noteId) => {
  try {
    console.log(`Service: ${noteId}`);
    const pool = await getPool();
    const sqlQuery = "SELECT * FROM notes WHERE id = ?";
    const values = [noteId];
    const [notes] = await pool.query(sqlQuery, values);

    if (notes.length !== 1) {
      errorsHelper.notFoundError("Nota no encontrada", "NOTE_NOT_FOUND");
    }
    return notes[0];
  } catch (error) {
    errorsHelper.internalServerError(error.message, "CREATE_USER_ERROR");
  }
};

export default main;
