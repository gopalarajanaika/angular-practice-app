import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components//users/users.component';
import { UserComponent } from './components/user/user.component';
import { UserService } from "./services/user.service";
import { PageTitleDirective } from './directives/page-title.directive';
import { CanActivateRouteGuardService } from './services/can-activate-route-guard.service';
import { AuthGuardService } from './services/auth-guard.service';
import { CanDeActivateService } from './services/canDeactivate.service';
import { CanloadService } from './services/canload.service';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    UserComponent,
    PageTitleDirective,
    AccessDeniedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    CanActivateRouteGuardService, 
    AuthGuardService, 
    CanDeActivateService,
    CanloadService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
