import errorsHelper from "../helpers/errors.helper.js";
import jwt from "jsonwebtoken";

const main = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) errorsHelper.notAuthorizedError("Token requerido");

    let tokenInfo;

    try {
      tokenInfo = jwt.verify(authorization, process.env.SECRET_KEY);
      req.user = tokenInfo;
      next();
    } catch (error) {
      errorsHelper.notAuthorizedError("Token no valido");
    }
  } catch (error) {
    next(error);
  }
};

export default main;
