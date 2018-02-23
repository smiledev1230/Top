import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Content } from 'ionic-angular';
import { CountryCodePage } from '../country-code/country-code';
import { VerifyPinPage } from '../verify-pin/verify-pin';
import { DataProvider } from '../../providers/data';
@Component({
  selector: 'page-enter-phone',
  templateUrl: 'enter-phone.html',
})
export class EnterPhonePage {
  @ViewChild(Content) content: Content;
  public local_number:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataProvider: DataProvider) {

  }

  ionViewDidLoad() {

  }

  selectCountry() {
    this.navCtrl.push(CountryCodePage);
  }

  nextPage() {
    if (!this.local_number) return;
    if (this.local_number.length >= 7 && this.local_number.length <=14){
      this.dataProvider.user.phone_number = this.local_number;
      this.navCtrl.push(VerifyPinPage);
    }
  }
}
