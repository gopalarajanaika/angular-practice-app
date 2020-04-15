import { Injectable } from "@angular/core";
import { CanLoad, ActivatedRoute, Route, UrlSegment, Router } from '@angular/router';

@Injectable()

export class CanloadService implements CanLoad {

    constructor(router: Router) { }
    canLoad(route: Route): boolean {

        let url: string = route.path;
        if (url == 'employee') {
              alert('You are not authorised to visit this page');
            // route.redirectTo = 'access-denied';
            return false;
        }

        //det

        return true;
    }


}