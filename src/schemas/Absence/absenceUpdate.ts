import * as yup from "yup";

export const absenceUpdateSchema = yup.object().shape({
  date: yup.string(),
  quantity: yup.number().positive(),
  medical: yup.boolean(),
});
