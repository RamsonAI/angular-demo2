import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor () {
    console.log('form-constructor');
  }

  getData(){
    console.log('getting Data');
  }

  ngOnInit(): void {
      this.getData();
  }

  ngOnDestroy(): void {

  }
}
