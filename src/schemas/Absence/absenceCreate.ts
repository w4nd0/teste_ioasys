import * as yup from "yup";

export const absenceCreateSchema = yup.object().shape({
  date: yup.string().required(),
  quantity: yup.number().positive().required(),
  medical: yup.boolean().required(),
  userId: yup.string().required(),
});
