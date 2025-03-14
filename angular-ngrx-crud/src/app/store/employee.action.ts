import { createAction, props } from '@ngrx/store';
import { Employee } from '../model/employee';

export const LOAD_EMPLOYEE = '[employee] getAll';
export const LOAD_EMPLOYEE_SUCCESS = 'employee getAll suc';
export const LOAD_EMPLOYEE_FAIL = 'employee getAll fail';

export const loadEmployee = createAction(LOAD_EMPLOYEE);
export const loadEmployeeSuc = createAction(
  LOAD_EMPLOYEE_SUCCESS,
  props<{ list: Employee[] }>()
);
export const loadEmployeeFail = createAction(
  LOAD_EMPLOYEE_FAIL,
  props<{ errMsg: string }>()
);
