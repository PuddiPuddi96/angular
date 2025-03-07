import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  apiUrl = 'http://localhost:3000/employee';

  constructor(private http: HttpClient) {}

  public getAll() {
    return this.http.get<Employee[]>(this.apiUrl);
  }

  public getEmployeeById(idEmployee: number) {
    return this.http.get<Employee>(this.apiUrl + '/' + idEmployee);
  }

  public createEmployee(data: Employee) {
    return this.http.post(this.apiUrl, data);
  }

  public updateEmployee(data: Employee) {
    return this.http.put(this.apiUrl + '/' + data.id, data);
  }

  public deleteEmployee(idEmployee: number) {
    return this.http.delete(this.apiUrl + '/' + idEmployee);
  }
}
