import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'My first angular app title firstApp';

  fname:string = "Siddhartha";
  lname:string = "Sarkar";

  url:string = "http://www.google.com";

  imageUrl:string = "./assets/images/m1.jpg";
  h:number = 100;
  w:number = 150;

  message:string = "You have clicked on this.";
  flag:boolean = false;
  showMe(){
    this.flag = !this.flag;
  }

  products=[
    {name:"Pencil",price:10.45,available:"09-03-2022",rating:4.5},
    {name:"Eraser",price:5.3,available:"03-03-2022",rating:4.0},
    {name:"Pen",price:15.00,available:"01-02-2022",rating:4.7},
    {name:"Scale",price:25,available:"01-03-2022",rating:3.5}
  ];

  we:number = 700;

}
