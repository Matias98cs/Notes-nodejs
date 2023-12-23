import errorsHelper from "../../helpers/errors.helper.js";
import getPool from "../../db/getPool.js";

const main = async (note, userId) => {
  try {
    const pool = await getPool();
    const [notes] = await pool.query("SELECT * FROM notes WHERE id = ?", [
      note.id,
    ]);
    if (notes.length !== 1)
      errorsHelper.notFoundError("Nota no encontrada", "NOTE_NOT_FOUND");

    if (notes[0].userId !== userId)
      errorsHelper.notAuthorizedError(
        "No esta autorizado para actualizar esta nota"
      );
    const sqlQuery =
      "UPDATE notes SET title = ?, text = ?, categoryId = ? WHERE id = ?";
    const values = [note.titulo, note.texto, note.categoria, note.id];
    const [response] = await pool.query(sqlQuery, values);
    if (response.affectedRows !== 1) {
      errorsHelper.conflictError(
        "Error al actualizar la nota",
        "UPDATE_NOTE_ERROR"
      );
    }
    return response.insertId;
  } catch (error) {
    errorsHelper.internalServerError(error.message, "UPDATE_NOTE_ERROR");
  }
};

export default main;
