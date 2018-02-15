import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { LoginProvider } from '../../providers/login';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public loginProvider: LoginProvider) {

  }

  ionViewDidLoad() {

  }

  loginFacebook() {
    this.loginProvider.loginFacebook();
  }

  loginLinkedin() {
    this.loginProvider.loginLinkedin();
  }

  register() {
    
  }
}
