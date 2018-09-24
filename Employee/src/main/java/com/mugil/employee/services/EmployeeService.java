package com.mugil.employee.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mugil.employee.dto.EmployeeDTO;
import com.mugil.employee.repository.EmployeeRepository;

@Service
public class EmployeeService {
	
	@Autowired
	EmployeeRepository employeeRepository;
	
	public List<EmployeeDTO> getAllEmployee(){
		return (List<EmployeeDTO>) employeeRepository.findAll();	
	}	
	
    public void createEmployee(EmployeeDTO employee) {
    	employeeRepository.save(employee);
	}   
	  
}

