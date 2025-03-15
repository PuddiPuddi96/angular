import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EmployeeService } from '../service/employee.service';
import {
  loadEmployee,
  loadEmployeeFail,
  loadEmployeeSuc,
} from './employee.action';
import { catchError, exhaustMap, map, of } from 'rxjs';

@Injectable()
export class EmployeeEffect {
  constructor(private action$: Actions, private service: EmployeeService) {}

  _loadEmployee = createEffect(() =>
    this.action$.pipe(
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
}
