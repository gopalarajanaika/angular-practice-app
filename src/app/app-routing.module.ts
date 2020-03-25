import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {path : '', component: HomeComponent},
  {path : 'home', redirectTo: '', pathMatch:'full'},
  {path : 'users', component: UsersComponent},
  {path : 'user', component: UserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
