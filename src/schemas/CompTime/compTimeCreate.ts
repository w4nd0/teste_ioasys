import * as yup from "yup";

export const compTimeCreateSchema = yup.object().shape({
  date: yup.string().required(),
  quantity: yup.number().positive().required(),
  authorized: yup.boolean().required(),
  withdrawn: yup.boolean().required(),
  userId: yup.string().required(),
});
