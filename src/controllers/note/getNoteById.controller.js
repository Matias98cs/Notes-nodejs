import notesService from "../../services/note/index.service.js";
import validateHelper from "../../helpers/validate.helper.js";
import createSchema from "../../schemas/note/getNoteById.schema.js";
import errorsHelper from "../../helpers/errors.helper.js";
const main = async (req, res, next) => {
  try {
    const { noteId } = req.params;
    console.log(noteId);
    await validateHelper(createSchema, req.params);

    const note = await notesService.getNoteById(noteId);

    if (note.userId !== req.user.id)
      errorsHelper.notAuthorizedError("No tiene permiso para ver esta nota");

    res.send({ message: "Nota obtenida", data: note });
  } catch (error) {
    next(error);
  }
};

export default main;
