import { createReducer, on } from '@ngrx/store';
import { employeeState } from './employee.state';
import {
  addEmployeeSuc,
  deleteEmployeeSuc,
  loadEmployeeFail,
  loadEmployeeSuc,
  updateEmployeeSuc,
} from './employee.action';

const _employeeReducer = createReducer(
  employeeState,
  on(loadEmployeeSuc, (state, action) => {
    return { ...state, list: action.list, errorMessage: '' };
  }),
  on(loadEmployeeFail, (state, action) => {
    return { ...state, list: [], errorMessage: action.errMsg };
  }),
  on(deleteEmployeeSuc, (state, action) => {
    const _newData = state.list.filter((o) => o.id != action.employeeId);
    return { ...state, list: _newData, errorMessage: '' };
  }),
  on(addEmployeeSuc, (state, action) => {
    const _newData = { ...action.data };
    return { ...state, list: [...state.list, _newData], errorMessage: '' };
  }),
  on(updateEmployeeSuc, (state, action) => {
    const _newData = state.list.map((o) => {
      return o.id === action.data.id ? action.data : o;
    });
    return { ...state, list: _newData, errorMessage: '' };
  })
);

export function employeeReducer(state: any, action: any) {
  return _employeeReducer(state, action);
}
