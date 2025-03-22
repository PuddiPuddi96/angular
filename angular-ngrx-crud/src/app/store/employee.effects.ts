import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EmployeeService } from '../service/employee.service';
import {
  deleteEmployee,
  deleteEmployeeSuc,
  emptyAction,
  loadEmployee,
  loadEmployeeFail,
  loadEmployeeSuc,
} from './employee.action';
import { catchError, exhaustMap, map, of, switchMap } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class EmployeeEffect {
  actions$ = inject(Actions);
  service = inject(EmployeeService);
  toastr = inject(ToastrService);

  _loadEmployee = createEffect(() =>
    this.actions$.pipe(
      ofType(loadEmployee),
      exhaustMap((action) => {
        return this.service.getAll().pipe(
          map((data) => {
            return loadEmployeeSuc({ list: data });
          }),
          catchError((err) => of(loadEmployeeFail({ errMsg: err.message })))
        );
      })
    )
  );

  _deleteEmployee = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteEmployee),
      switchMap((action) => {
        return this.service.deleteEmployee(action.employeeId).pipe(
          switchMap((data) => {
            return of(
              deleteEmployeeSuc({ employeeId: action.employeeId }),
              this.showAlert('Deleted succesdsfully', 'pass')
            );
          }),
          catchError((err) => of(this.showAlert(err.message, 'fail')))
        );
      })
    )
  );

  private showAlert(message: string, response: string) {
    if (response === 'pass') {
      this.toastr.success(message);
    } else {
      this.toastr.error(message);
    }
    return emptyAction();
  }
}
