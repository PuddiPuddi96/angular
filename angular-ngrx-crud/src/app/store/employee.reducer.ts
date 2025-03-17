import { createReducer, on } from '@ngrx/store';
import { employeeState } from './employee.state';
import { loadEmployeeFail, loadEmployeeSuc } from './employee.action';

const _employeeReducer = createReducer(
  employeeState,
  on(loadEmployeeSuc, (state, action) => {
    return { ...state, list: action.list, errorMessage: '' };
  }),
  on(loadEmployeeFail, (state, action) => {
    return { ...state, list: [], errorMessage: action.errMsg };
  })
);

export function employeeReducer(state: any, action: any) {
  return _employeeReducer(state, action);
}
