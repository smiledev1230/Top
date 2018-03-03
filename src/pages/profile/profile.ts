import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';
import { EditPage } from '../edit/edit';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  public is_smoking: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.is_smoking = 'assets/imgs/profile/not-smoking.png';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  goToHome() {
    this.navCtrl.pop();
  }

  goToSettings() {
    this.navCtrl.push(SettingsPage);
  }

  goToEdit() {
    this.navCtrl.push(EditPage);
  }
}
