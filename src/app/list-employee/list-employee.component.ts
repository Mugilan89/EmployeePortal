import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

   
  employees: Employee[];
  constructor(private router: Router, private employeeService: EmployeeService) { }

  ngOnInit() {    
    this.employeeService.getEmployees()
      .subscribe( data => {
        this.employees = data;
      });
  }

  addEmployee(): void {
    this.router.navigate(['register']);
  };

}
