import { createAction, props } from '@ngrx/store';
import { Employee } from '../model/employee';

export const LOAD_EMPLOYEE = 'employee gatAll';
export const LOAD_EMPLOYEE_SUCCESS = 'employee getAll suc';
export const LOAD_EMPLOYEE_FAIL = 'employee getAll fail';

const loadEmployee = createAction(LOAD_EMPLOYEE);
const loadEmployeeSuc = createAction(
  LOAD_EMPLOYEE_SUCCESS,
  props<{ list: Employee[] }>
);
const loadEmployeeFail = createAction(
  LOAD_EMPLOYEE_FAIL,
  props<{ errMss: string }>
);
