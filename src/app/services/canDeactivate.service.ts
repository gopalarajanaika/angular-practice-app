import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

import { UserComponent } from '../components/user/user.component';

@Injectable()
export class CanDeActivateService implements CanDeactivate<UserComponent> {
  canDeactivate(component: UserComponent): boolean {
    if (component.unsavedChanges) {
      return confirm('Are you sure?');
    }
    return true;
  }
}