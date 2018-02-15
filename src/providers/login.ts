import { Injectable, NgZone } from '@angular/core';
import { ConfigProvider } from '../providers/config';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { LinkedIn } from '@ionic-native/linkedin';

@Injectable()
export class LoginProvider {

  constructor(private config: ConfigProvider, private fb: Facebook, private linkedin: LinkedIn) {

  }

  loginFacebook() {
    this.fb.login(['public_profile', 'user_friends', 'email'])
      .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
      .catch(e => console.log('Error logging into Facebook', e));
    // this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);
  }

  loginLinkedin() {
    let scopes:any = ['r_basicprofile', 'r_emailaddress', 'rw_company_admin', 'w_share'];
    this.linkedin.login(scopes, true).then((res) => {
        console.log(res+"login") ;
    }, (err) => {
        console.log(err+"failed") ;
    });
  } 
}