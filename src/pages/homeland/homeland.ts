import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data';

@Component({
  selector: 'page-homeland',
  templateUrl: 'homeland.html',
})
export class HomelandPage {
  public country_list: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public dataProvider: DataProvider) {
    this.country_list = this.dataProvider.user.user_geolocation_city;
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomelandPage');
  }

  selectCountyCode(country_name) {
    this.dataProvider.user.​user_geolocation_city = country_name;
    this.navCtrl.pop();
  }
}
