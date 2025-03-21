import { createAction, props } from '@ngrx/store';
import { Employee } from '../model/employee';

//LOAD
export const LOAD_EMPLOYEE = '[employee] getAll';
export const LOAD_EMPLOYEE_SUCCESS = 'employee getAll suc';
export const LOAD_EMPLOYEE_FAIL = 'employee getAll fail';

//DELETE
export const DELETE_EMPLOYEE = '[employee] delete';
export const DELETE_EMPLOYEE_SUCCESS = '[employee] delete suc';

//LOAD
export const loadEmployee = createAction(LOAD_EMPLOYEE);
export const loadEmployeeSuc = createAction(
  LOAD_EMPLOYEE_SUCCESS,
  props<{ list: Employee[] }>()
);
export const loadEmployeeFail = createAction(
  LOAD_EMPLOYEE_FAIL,
  props<{ errMsg: string }>()
);

//DELETE
export const deleteEmployee = createAction(
  DELETE_EMPLOYEE,
  props<{ employeeId: number }>()
);
export const deleteEmployeeSuc = createAction(
  DELETE_EMPLOYEE_SUCCESS,
  props<{ employeeId: number }>()
);

//Empty
export const emptyAction = createAction('empty');
