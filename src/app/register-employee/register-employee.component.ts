import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms"; 
import { Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.css']
})
export class RegisterEmployeeComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private employeeService: EmployeeService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      id: [],
      dob: [],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
  }

  onSubmit() {
    this.employeeService.createEmployee(this.registerForm.value)
      .subscribe( data => {
        this.router.navigate(['listemployee']);
      });
  }

}
