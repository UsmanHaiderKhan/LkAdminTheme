import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})

export class DropdownComponent implements OnInit {
  @Input() dropDownList: DropDownModel[];
  constructor() { }

  ngOnInit(): void {
  }

}
export class DropDownModel {
  text: string;
  link: string;
}