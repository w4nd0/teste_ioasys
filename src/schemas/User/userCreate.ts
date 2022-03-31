import * as yup from "yup";

export const userCreateSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
    name: yup.string().required(),
    lastname: yup.string().required(),
    birthDate: yup.string().required(),
});