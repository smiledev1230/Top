import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PassengerPage } from '../passenger/passenger';
@Component({
  selector: 'page-add-card',
  templateUrl: 'add-card.html',
})
export class AddCardPage {
  private cardPerson: string = "../assets/imgs/camera.png";
  private userName: any = "Andrey";
  private userAge: any = "34";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddCardPage');
    let user = this.navParams.get('user');
    if (user) {
      this.userName = user.fname + " " + user.lname;
      let currentDate = new Date();
      let birthdate = new Date(user.birthdate);
      this.userAge = currentDate.getFullYear() - birthdate.getFullYear();
    }
  }

  nextPage() {
    this.navCtrl.push(PassengerPage);
  }
}
