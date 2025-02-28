import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatDialogModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
})
export class EmployeeComponent {
  constructor(private dialog: MatDialog) {}

  public addEmployee() {
    this.dialog.open(AddEmployeeComponent, {
      width: '50%',
      exitAnimationDuration: '1000ms',
      enterAnimationDuration: '1000ms'
    })
  }
}
