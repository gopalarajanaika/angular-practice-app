import { NgModule } from "@angular/core";
import { AddEmployeeComponent } from './components/add-employee.component';
import { EmployeeRoutingModule } from './employee-routing.module';

@NgModule({
    declarations:[
        AddEmployeeComponent
    ],
    imports:[
        EmployeeRoutingModule
    ],
    exports:[],
    providers:[]
})

export class EmployeeModule{}