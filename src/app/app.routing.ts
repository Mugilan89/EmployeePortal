import { RouterModule, Routes } from '@angular/router';
import { RegisterEmployeeComponent } from './register-employee/register-employee.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';

const routes: Routes = [
    { path: '', component: RegisterEmployeeComponent },
    { path: 'register', component: RegisterEmployeeComponent },
    { path: 'listemployee', component: ListEmployeeComponent },
]

export const routing = RouterModule.forRoot(routes);