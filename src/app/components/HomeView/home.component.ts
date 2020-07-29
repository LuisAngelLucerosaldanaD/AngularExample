import { Component } from '@angular/core';

@Component({
  selector: 'homeView',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeView {
  name: string;
  age: number;
  address: {
    street: string;
    city: string;
  };
  hobbies: string[];

  constructor() {
    this.name = 'Luis Angel';
    this.age = 0;
    this.address = {
      street: '02 mz f lt 2',
      city: 'supte',
    };
    this.hobbies = ['swinnig', 'read', 'write'];
  }

  loginUser(userName, password) {
    if (userName.value !== '' && password.value !== '') {
      console.log(userName.value);
      console.log(password.value);
      userName.value = '';
      password.value = '';
    } else {
      alert('complete todos los campos por favor');
    }

    return false;
  }
}
