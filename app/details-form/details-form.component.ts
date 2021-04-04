import { Component, OnInit, Input } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-details-form',
  templateUrl: './details-form.component.html',
  styleUrls: ['./details-form.component.css']
})
export class DetailsFormComponent implements OnInit {

  @Input("username") user: string ='';
  firstName: string = "Athira";
  lastName: string = "Nair";
  UserName: string = '';
  name: string ="Initial value"
  constructor() { }

  ngOnInit(): void {
  }

  setValue() {
    this.name = 'Nancy';
  }
  show() {
    this.UserName = this.firstName + "_" + this.lastName + Math.floor((Math.random() * 10) + 1);
  }
  showName(userDetails: NgForm) {
   // console.log(userDetails.value.firstname);
    if (!(userDetails.value.length == 0)) {
      console.log("message");
      this.UserName = (userDetails.value.firstname + "_" + userDetails.value.lastname).toLowerCase() + Math.floor((Math.random() * 10) + 1);
    }
    
    //this.UserName = userDetails.value.firstname + "_" + userDetails.value.lastname + Math.floor((Math.random() * 10) + 1);;
    //this.UserName = this.firstName + "_" + this.lastName + Math.floor((Math.random() * 10) + 1);
    console.log(userDetails.value.firstname.length);
    console.log(userDetails.value.Count);
    //console.log(userDetails.c);
  }

}
