import bcrypt from "bcrypt";
import validateHelper from "../../helpers/validate.helper.js";
import createSchema from "../../schemas/user/create.schema.js";
import userService from "../../services/index.service.js";

const main = async (req, res, next) => {
  try {
    //validar esquina
    await validateHelper(createSchema, req.body);
    //enviar al servicio los datos
    req.body.password = await bcrypt.hash(req.body.password, 5);
    await userService.create(req.body);
    //responder
    res.send("Usuario creado con exito");
  } catch (error) {
    next(error);
  }
};

export default main;
