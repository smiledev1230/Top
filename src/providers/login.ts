import { Injectable, NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { LinkedIn } from '@ionic-native/linkedin';
import { ConfigProvider } from './config';
import { HomePage } from '../pages/home/home';
import { EnterPhonePage } from '../pages/enter-phone/enter-phone';

@Injectable()
export class LoginProvider {
  private navCtrl: NavController;
  constructor( public fb: Facebook, public linkedin: LinkedIn) {

  }

  setNavController(navCtrl) {
    this.navCtrl = navCtrl;
  }

  loginFacebook() {
    this.fb.login(['public_profile', 'user_friends', 'email'])
      .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
      .catch(e => console.log('Error logging into Facebook', e));
    // this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);
    this.navCtrl.push(HomePage);
  }
  
  loginLinkedin() {
    let scopes:any = ['r_basicprofile', 'r_emailaddress', 'rw_company_admin', 'w_share'];
    this.linkedin.login(scopes, true).then((res) => {
      console.log(res+"login") ;
    }, (err) => {
      console.log(err+"failed") ;
    });
    this.navCtrl.push(HomePage);
  }
}