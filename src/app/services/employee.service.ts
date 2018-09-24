import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseUrl: string = 'http://localhost:8080/api';
  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get<Employee[]>(this.baseUrl + '/employees');
  }

  createEmployee(employee: Employee) {
    return this.http.post(this.baseUrl + '/create', employee);
  }

}
