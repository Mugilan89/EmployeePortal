package com.mugil.employee.repository;

import org.springframework.data.repository.CrudRepository;

import com.mugil.employee.dto.EmployeeDTO;;

public interface EmployeeRepository extends CrudRepository<EmployeeDTO, Integer> {

}
