import * as yup from 'yup';

export const employeeValidationSchema = yup.object().shape({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  vacation_days: yup.number().integer().required(),
  salary: yup.number().integer().required(),
  company_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
