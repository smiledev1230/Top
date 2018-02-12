import { Injectable, NgZone } from '@angular/core';
import { ConfigProvider } from '../providers/config';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

@Injectable()
export class LoginProvider {

  constructor(private config: ConfigProvider, private fb: Facebook) {

  }

  loginFacebook() {
    this.fb.login(['public_profile', 'user_friends', 'email'])
      .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
      .catch(e => console.log('Error logging into Facebook', e));
    // this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);
  }

  loginLinkedin() {
  
  } 
}