import errorsHelper from "../../helpers/errors.helper.js";
import getPool from "../../db/getPool.js";

const main = async (note, userId) => {
  try {
    console.log(userId);
    const pool = await getPool();
    const sqlQuery =
      "INSERT INTO notes (title, text, userId, categoryId) VALUES (?, ?, ?, ?)";
    const values = [note.titulo, note.texto, userId, note.categoria];
    const [response] = await pool.query(sqlQuery, values);
    if (response.affectedRows !== 1) {
      errorsHelper.conflictError(
        "Error al insertar la nota",
        "CREATE_NOTE_ERROR"
      );
    }
    return response.insertId;
  } catch (error) {
    errorsHelper.internalServerError(error.message, "CREATE_NOTE_ERROR");
  }
};

export default main;
