import { Directive, Input, ViewContainerRef, TemplateRef} from '@angular/core';
@Directive({
  selector: '[appDirective]'
})
export class PageTitleDirective {

  @Input() testData:string;

  constructor() { }

  ngOnInit(){
    console.log(this.testData);
  }

}