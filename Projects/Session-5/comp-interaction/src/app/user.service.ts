import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUser(){
    return{name: "Siddhartha", email:"siddhartha@gmail.com", address:"Kolkata"};
  }

}
