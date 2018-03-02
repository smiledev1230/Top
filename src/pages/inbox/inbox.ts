import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { MessagePage } from '../message/message';
import { SettingDatePage } from '../setting-date/setting-date';

@Component({
  selector: 'page-inbox',
  templateUrl: 'inbox.html',
})
export class InboxPage {
  public inboxes: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    for (let i=1; i<10;i++) {
      let inbox = {
        userId: i,
        name: 'K.A',
        avatar: 'assets/imgs/inbox/avatar.png',
        image: 'assets/imgs/inbox/honeymoon.png'
      }
      this.inboxes.push(inbox);
    }
    this.inboxes[0]['image'] = 'assets/imgs/inbox/honeymoon-on.png';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InboxPage');
  }

  goToProfile(userId) {
    this.navCtrl.push(ProfilePage, { userId: userId });
  }
  
  goToMessage(userId) {
    this.navCtrl.push(MessagePage, { userId: userId });
  }
  
  goToSettingDate(userId) {
    this.navCtrl.push(SettingDatePage, { userId: userId });
  }

  deleteConversation(userId) {
    let alert = this.alertCtrl.create({
      title: "Delete Conversation",
      subTitle: "Are you sure?",
      buttons: [
        {
          text: "Cancel",
          handler: data => { }
        }, {
          text: "Delete",
          handler: data => {
            console.log(data);
          }
        }]
    }).present();
  }
}
