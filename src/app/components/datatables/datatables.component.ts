import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datatables',
  templateUrl: './datatables.component.html',
  styleUrls: ['./datatables.component.css']
})
export class DatatablesComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  items = [
    {
        name : "John Doe",
        role : "Web Developer",
        type : "company",
        number : "9834553448",
        email: "johndoe@stanley.com",
        id : 121
    },
    {
        name : "Richard Miles",
        role : "React Developer",
        type : "client",
        number : "9834573448",
        email: "richardmiles@stanley.com",
        id : 122
    },
    {
        name : "John Smith",
        role : "Angular Developer",
        type : "staff",
        number : "9834593448",
        email: "johnsmith@stanley.com",
        id : 124
    }
]
  constructor() { }

  ngOnInit() {
    this.dtOptions = {
      dom: 'lrtip'
   }
  }
}
