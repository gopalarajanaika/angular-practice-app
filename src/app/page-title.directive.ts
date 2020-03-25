import { Directive } from '@angular/core';

@Directive({
  selector: '[appPageTitle]'
})
export class PageTitleDirective {

  constructor() { 
    console.log("Directive");
  }

}
