import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { LoginService } from '../service/login.service';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private login: LoginService, private Router: Router) {
    const lang = localStorage.getItem('lang');

    if(!lang){
      localStorage.setItem('lang','español');
    }
  }

  logout(){
    this.login.logout();
    this.Router.navigate(['../login']);
  }

  goto(go){
    this.Router.navigate([go]);
  }

  setLang(lang){
    localStorage.setItem('lang',lang);
  }
}
