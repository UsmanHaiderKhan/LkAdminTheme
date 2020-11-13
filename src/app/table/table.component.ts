import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  users = [
    { userName: 'Usman', email: 'usman@gmail.com', password: '123uiy', phoneNumber: 3349875662, address: 'Pakistan,lahore', gender: true, dateOfBirth: '03-09-1997' },
    { userName: 'Usman', email: 'usman@gmail.com', password: '123uiy', phoneNumber: 3349875662, address: 'Pakistan,lahore', gender: true, dateOfBirth: '03-09-1997' },
    { userName: 'Usman', email: 'usman@gmail.com', password: '123uiy', phoneNumber: 3349875662, address: 'Pakistan,lahore', gender: true, dateOfBirth: '03-09-1997' },
    { userName: 'Usman', email: 'usman@gmail.com', password: '123uiy', phoneNumber: 3349875662, address: 'Pakistan,lahore', gender: true, dateOfBirth: '03-09-1997' },
    { userName: 'Usman', email: 'usman@gmail.com', password: '123uiy', phoneNumber: 3349875662, address: 'Pakistan,lahore', gender: true, dateOfBirth: '03-09-1997' },
    { userName: 'Usman', email: 'usman@gmail.com', password: '123uiy', phoneNumber: 3349875662, address: 'Pakistan,lahore', gender: true, dateOfBirth: '03-09-1997' },

  ];
  constructor() {
  }

  ngOnInit(): void {
  }

}
