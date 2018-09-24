package com.mugil.employee.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mugil.employee.dto.EmployeeDTO;
import com.mugil.employee.services.EmployeeService;

@RestController
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders="*")
@RequestMapping("/api")
public class EmployeeController {
	@Autowired
	EmployeeService employeeService;	
	
	@GetMapping("/employees")
	public List<EmployeeDTO> getAllEmployee() {
		return employeeService.getAllEmployee();
	}
	
	@PostMapping("/create")
	public void create(@RequestBody EmployeeDTO employee) {
		employeeService.createEmployee(employee);		
	}	
	
}
