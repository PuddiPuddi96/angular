import { Component, Inject, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { provideNativeDateAdapter } from '@angular/material/core';
import { Employee } from '../../model/employee';
import { EmployeeService } from '../../service/employee.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngrx/store';
import { addEmployee, updateEmployee } from '../../store/employee.action';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatIconModule,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css',
})
export class AddEmployeeComponent implements OnInit {
  title: string = 'Add Employee';
  dialogdata: any;
  isEdit = false;
  // constructor(
  //   private readonly service: EmployeeService,
  //   private readonly ref: MatDialogRef<AddEmployeeComponent>,
  //   private readonly toastr: ToastrService,
  //   @Inject(MAT_DIALOG_DATA) public data: any
  // ) {}

  constructor(
    private readonly store: Store,
    private readonly ref: MatDialogRef<AddEmployeeComponent>,
    private readonly toastr: ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.dialogdata = this.data;
    if (this.dialogdata.code > 0) {
      this.title = 'Edit Employee';
      this.isEdit = true;
      // this.service.getEmployeeById(this.dialogdata.code).subscribe((item) => {
      //   let _data = item;
      //   if (_data != null) {
      //     this.employeeForm.setValue({
      //       id: _data.id,
      //       name: _data.name,
      //       doj: _data.doj,
      //       role: _data.role,
      //       salary: _data.salary,
      //     });
      //   }
      // });
    }
  }

  employeeForm = new FormGroup({
    id: new FormControl(0),
    name: new FormControl('', Validators.required),
    doj: new FormControl(new Date(), Validators.required),
    role: new FormControl('', Validators.required),
    salary: new FormControl(0, Validators.required),
  });

  saveEmployee() {
    if (this.employeeForm.valid) {
      let _data: Employee = {
        id: this.employeeForm.value.id as number,
        name: this.employeeForm.value.name as string,
        doj: new Date(this.employeeForm.value.doj as Date),
        role: this.employeeForm.value.role as string,
        salary: this.employeeForm.value.salary as number,
      };
      // if (this.isEdit) {
      //   this.service.updateEmployee(_data).subscribe((item) => {
      //     this.toastr.success('Saved successfully', 'Updated');
      //   });
      if (!this.isEdit) {
        this.store.dispatch(addEmployee({ data: _data }));
      }
      else {
        // this.service.createEmployee(_data).subscribe((item) => {
        //   this.toastr.success('Saved successfully', 'Created');
        // });
        this.store.dispatch(updateEmployee({data:_data}))
      }
      this.closePopup();
    }
  }

  public closePopup() {
    this.ref.close();
  }
}
