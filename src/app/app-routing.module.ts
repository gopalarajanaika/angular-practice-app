import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { CanActivateRouteGuardService } from './services/can-activate-route-guard.service';
import { CanDeActivateService } from './services/canDeactivate.service';
import { CanloadService } from './services/canload.service';

const routes: Routes = [
    { path: '', component: HomeComponent },
    // { path: 'home', redirectTo: '', pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    { path: 'users', component: UsersComponent, canActivate: [CanActivateRouteGuardService] },
    { path: 'user', component: UserComponent, canDeactivate: [CanDeActivateService] },
    { path: 'employee', loadChildren: () => import('./modules/employee/employee.module').then(m => m.EmployeeModule), canLoad:[CanloadService] }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
