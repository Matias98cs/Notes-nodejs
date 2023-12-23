import notesService from "../../services/note/index.service.js";

const main = async (req, res, next) => {
  try {
    const notes = await notesService.getOwnList(req.user.id);
    res.send({ message: "Listado de notas propias", data: notes });
  } catch (error) {
    next(error);
  }
};

export default main;
