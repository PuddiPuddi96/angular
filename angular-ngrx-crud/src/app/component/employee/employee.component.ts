import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { Employee } from '../../model/employee';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { getEmployeeList } from '../../store/employee.selector';
import { deleteEmployee, loadEmployee } from '../../store/employee.action';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    CommonModule,
    MatTableModule,
  ],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
})
export class EmployeeComponent implements OnInit, OnDestroy {
  employeeList: Employee[] = [];
  dataSource!: MatTableDataSource<Employee>;
  displayedColumns: string[] = [
    'id',
    'name',
    'role',
    'doj',
    'salary',
    'action',
  ];
  subscription = new Subscription();

  // constructor(
  //   private readonly dialog: MatDialog,
  //   private readonly service: EmployeeService
  // ) {}

  constructor(
    private readonly dialog: MatDialog,
    private readonly store: Store
  ) {}

  ngOnInit(): void {
    this.getAllEmployee();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  // public getAllEmployee() {
  //   let subscribe = this.service.getAll().subscribe((item) => {
  //     this.employeeList = item;
  //     this.dataSource = new MatTableDataSource(this.employeeList);
  //   });
  //   this.subscription.add(subscribe);
  // }

  public getAllEmployee() {
    this.store.dispatch(loadEmployee());
    this.store.select(getEmployeeList).subscribe((item) => {
      this.employeeList = item;
      this.dataSource = new MatTableDataSource(this.employeeList);
    });
  }

  public addEmployee() {
    this.openPopup(0);
  }

  public editEmployee(employeeId: number) {
    this.openPopup(employeeId);
  }

  // public deleteEmployee(employeeId: number) {
  //   if (confirm('Are you sure?')) {
  //     let sub = this.service.deleteEmployee(employeeId).subscribe((item) => {
  //       this.getAllEmployee();
  //     });
  //     this.subscription.add(sub);
  //   }
  // }

  public deleteEmployee(employeeId: number) {
    if (confirm('Are you sure?')) {
      this.store.dispatch(deleteEmployee({ employeeId: employeeId }));
    }
  }

  openPopup(employeeId: number) {
    this.dialog
      .open(AddEmployeeComponent, {
        width: '50%',
        exitAnimationDuration: '1000ms',
        enterAnimationDuration: '1000ms',
        data: {
          code: employeeId,
        },
      })
      .afterClosed()
      .subscribe((o) => {
        this.getAllEmployee();
      });
  }
}
