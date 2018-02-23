import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
@Component({
  selector: 'page-verify-pin',
  templateUrl: 'verify-pin.html',
})
export class VerifyPinPage {
  public pin_code:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

  }
  nextPage() {
    if (this.pin_code.length ==4 || this.pin_code.length==5)
      this.navCtrl.push(RegisterPage);
  }
}
