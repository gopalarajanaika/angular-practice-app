import { Component, OnInit, HostListener } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
declare var $:any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(public sharedService: SharedService) { }

  ngOnInit() {
  }

  @HostListener('document:click', ['$event'])
  docClicked(event){
    console.log("Clicked on doc");
    this.sharedService.showSidebar = false;
  }

  sidebarClik(event){
    console.log("Clicked on sidebar");
    event.stopPropagation();
  }

  

}
