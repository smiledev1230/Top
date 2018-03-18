import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CalendarComponentOptions } from 'ion2-calendar';
import * as moment from 'moment';
import { ChangeLocationPage } from '../change-location/change-location';
import { InvitationPage} from '../invitation/invitation';

@Component({
  selector: 'page-setting-date',
  templateUrl: 'setting-date.html',
})
export class SettingDatePage {
  private settingDate: any;
  private settingTime: any;
  dateRange: { from: string; to: string; };
  type: 'string';
  optionsRange: CalendarComponentOptions = {
    pickMode: 'single',

  };
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let currentdate = new Date();
    this.settingDate = moment(currentdate).format('YYYY-MM-DD');
    this.settingTime = currentdate.getHours()+':'+currentdate.getMinutes();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingDatePage');
  }

  onChange($event) {
    console.log($event);
    console.log(this.settingDate);
    console.log(this.settingTime);
  }

  choose() {
    this.navCtrl.push(ChangeLocationPage);
  }
  
  invitation() {
    // this.navCtrl.push(InvitationPage);
  }
}