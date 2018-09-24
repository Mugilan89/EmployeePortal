Steps To Launch:
===============

Place both Employee and EmployeeClient project in same folder.

Note: Run ng build --prod in anuglar app to create dist folder.

1. Open the Employee in the STS.
2. Right click the project and choose Maven Install from Run As Option.
3. It will create the War file under the Employee/target
4. Copy the war file and place it in C:\Program Files\apache-tomcat-9.0.12\webapps.
5. Now run the startup.bat from  C:\Program Files\apache-tomcat-9.0.12\bin
6. Launch the http://localhost:8080.
7. It will launch the employee registraton form.
8. Add the details ad click register t will lst the employees.

Step Followed:

Angular:
========

1. Created the router to navigate  from register to list employee page.
2. Created the service to add and list the employee using rest API.
3. Created two components register-employee and list-employee to register and list the employees.


Spring Boot:
============

1. Created the employee entity which contians the employee fields.
2. Created controller to consume the request from angualr app.
3. Created the service to add and get the employees from database.
4. Configured H2 database to store the data.
5. Created the crud repository to dao layer.



