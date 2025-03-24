import { createAction, props } from '@ngrx/store';
import { Employee } from '../model/employee';

//LOAD
export const LOAD_EMPLOYEE = '[employee] getAll';
export const LOAD_EMPLOYEE_SUCCESS = 'employee getAll suc';
export const LOAD_EMPLOYEE_FAIL = 'employee getAll fail';

//DELETE
export const DELETE_EMPLOYEE = '[employee] delete';
export const DELETE_EMPLOYEE_SUCCESS = '[employee] delete suc';

//ADD
export const ADD_EMPLOYEE = '[employee] add';
export const ADD_EMPLOYEE_SUCCESS = '[employee] add suc';

//UPDATE
export const UPDATE_EMPLOYEE = '[employee] update';
export const UPDATE_EMPLOYEE_SUCCESS = '[employee] update suc';

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

//ADD
export const addEmployee = createAction(
  ADD_EMPLOYEE,
  props<{ data: Employee }>()
);
export const addEmployeeSuc = createAction(
  ADD_EMPLOYEE_SUCCESS,
  props<{ data: Employee }>()
);

//UPDATE
export const updateEmployee = createAction(
  UPDATE_EMPLOYEE,
  props<{ data: Employee }>()
);
export const updateEmployeeSuc = createAction(
  UPDATE_EMPLOYEE_SUCCESS,
  props<{ data: Employee }>()
);

//Empty
export const emptyAction = createAction('empty');
