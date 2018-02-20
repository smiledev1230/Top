import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Content } from 'ionic-angular';
import { VerifyPinPage } from '../verify-pin/verify-pin';
import { DataProvider } from '../../providers/data';
@Component({
  selector: 'page-enter-phone',
  templateUrl: 'enter-phone.html',
})
export class EnterPhonePage {
  @ViewChild(Content) content: Content;
  @ViewChild('codeList') codeList;
  public country_codes:any;
  public select_code:string = 'af';
  public local_number:any;
  public list_status = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataProvider: DataProvider) {
    this.getCountryCode();
  }

  ionViewDidLoad() {

  }

  getCountryCode() {
    this.dataProvider.getCountryCode().then(response=>{
      this.country_codes = response;
    });
  }

  selectCountry() {
    this.list_status = true;
  }
  
  selectCode(i) {
    this.list_status = false;
    this.select_code = this.country_codes[i]['code'].toLowerCase();
  }

  nextPage() {
    if (!this.local_number) return;
    if (this.local_number.length < 7 || this.local_number.length > 12) return;
    this.navCtrl.push(VerifyPinPage,{'phone_number': this.local_number});
  }
}
