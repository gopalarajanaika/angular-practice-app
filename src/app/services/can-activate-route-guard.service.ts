import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';

@Injectable()
export class CanActivateRouteGuardService implements CanActivate {
  constructor(public router: Router, private auth: AuthGuardService) {}

  canActivate(): boolean {
    if(!this.auth.canAccess){
      this.router.navigate(['/home'])
      return false
    }else{
      return true;
    }
  }
}