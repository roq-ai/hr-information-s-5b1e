import * as yup from 'yup';

export const vacationRequestValidationSchema = yup.object().shape({
  start_date: yup.date().required(),
  end_date: yup.date().required(),
  employee_id: yup.string().nullable(),
});
