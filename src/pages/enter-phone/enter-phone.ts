import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Content } from 'ionic-angular';
import { CountryCodePage } from '../country-code/country-code';
import { VerifyPinPage } from '../verify-pin/verify-pin';
import { DataProvider } from '../../providers/data';
import { RestServiceProvider } from '../../providers/rest';
@Component({
  selector: 'page-enter-phone',
  templateUrl: 'enter-phone.html',
})
export class EnterPhonePage {
  @ViewChild(Content) content: Content;
  public local_number:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataProvider: DataProvider, public restProvider: RestServiceProvider) {

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
      this.restProvider.getHttp(this.restProvider.registerPhone(this.dataProvider.user.phone_number)).then((response)=> {
        console.log(response);
        if (response && response.status==1) {
          this.navCtrl.push(VerifyPinPage);
        }
      });
    }
  }
}
