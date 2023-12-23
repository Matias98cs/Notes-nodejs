import joi from "joi";

const createSchema = joi.object({
  email: joi.string().required().email(),
  password: joi.string().required().min(8).max(10),
});

export default createSchema;
