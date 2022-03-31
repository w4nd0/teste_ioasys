import * as yup from "yup";

export const compTimeUpdateSchema = yup.object().shape({
  date: yup.string(),
  quantity: yup.number().positive(),
  authorized: yup.boolean(),
  withdrawn: yup.boolean(),
});
