import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data';

@Component({
  selector: 'page-homeland',
  templateUrl: 'homeland.html',
})
export class HomelandPage {
  public country_codes:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public dataProvider: DataProvider) {
    this.getCountryCode();
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomelandPage');
  }

  getCountryCode() {
    this.dataProvider.getCountryCode().then(response=>{
      this.country_codes = response;
    });
  }
  selectCountyCode(code) {
    this.dataProvider.user.country = code;
    this.navCtrl.pop();
  }
}
