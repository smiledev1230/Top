import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data';
import { HomelandPage } from '../homeland/homeland';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  public country_list: any = [];
  public ageRange: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataProvider: DataProvider) {
    this.ageRange = {lower: dataProvider.user.user_age_range_min, upper: dataProvider.user.user_age_range_max};
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }
  
  saveSettings() {
    
  }
  
  ageSelect(ev: any) {
    this.dataProvider.user.user_age_range_min = ev.value['lower'];
    this.dataProvider.user.user_age_range_max = ev.value['upper'];
  }

  selectLocation() {
    this.navCtrl.push(HomelandPage);
  }

}
