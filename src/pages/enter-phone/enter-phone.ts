import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Content } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { VerifyPinPage } from '../verify-pin/verify-pin';

@Component({
  selector: 'page-enter-phone',
  templateUrl: 'enter-phone.html',
})
export class EnterPhonePage {
  @ViewChild(Content) content: Content;
  @ViewChild('codeList') codeList;
  public country_codes = [];
  public select_code:string = 'af';
  public local_number:any;
  public list_status = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.getCountryCode();
  }

  ionViewDidLoad() {

  }

  getCountryCode() {
    let url = "assets/country_codes.json";
    this.http.get(url).map(res => res.json()).subscribe(data => {
      this.country_codes = data;
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
    if (this.local_number.length < 6) return;
    this.navCtrl.push(VerifyPinPage,{'phone_number': this.local_number});
  }
}
