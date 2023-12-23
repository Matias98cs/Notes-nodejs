import validateHelper from "../../helpers/validate.helper.js";
import loginSchema from "../../schemas/user/login.schema.js";
import userService from "../../services/index.service.js";

const main = async (req, res, next) => {
  try {
    //validar esquina
    await validateHelper(loginSchema, req.body);
    //enviar al servicio los datos
    const token = await userService.login(req.body);
    //responder
    res.send(token);
  } catch (error) {
    next(error);
  }
};

export default main;
