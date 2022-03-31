import * as yup from "yup";

export const userUpdateSchema = yup.object().shape({
  name: yup.string(),
  lastname: yup.string(),
  birthDate: yup.string(),
});
