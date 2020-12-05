import { Component, OnInit } from '@angular/core';
import { DropDownModel } from '../dropdown/dropdown.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  listOfDropDown: DropDownModel[];
  constructor() {
    this.listOfDropDown = new Array<DropDownModel>();
    this.listOfDropDown.push({
      text: "dropdownList",
      link: "DashBoard",
    });
  }

  ngOnInit(): void {
    this.openNav();
  }
  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";

  }
  dropdownShow() {
    var element = document.querySelector("dropdown");
    element.classList.toggle("show");
  }
}
