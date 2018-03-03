import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data';

@Component({
  selector: 'page-country-code',
  templateUrl: 'country-code.html',
})
export class CountryCodePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataProvider: DataProvider) {
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad CountryCodePage');
  }

  selectCountyCode() {
    let selectedCode = this.dataProvider.getSelectedCode(this.dataProvider.user.country_code);
    this.dataProvider.user.country = selectedCode['dial_code'];
    this.navCtrl.pop();
  }
}
