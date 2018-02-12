import { Injectable, NgZone } from '@angular/core';
import { Facebook } from 'ng2-cordova-oauth/core';
import { OauthCordova } from 'ng2-cordova-oauth/platform/cordova';

import { ConfigProvider } from '../providers/config';

@Injectable()
export class LoginProvider {

  private oauth: OauthCordova;
  private facebookProvider : Facebook;

  constructor(public config: ConfigProvider) {
    this.oauth = new OauthCordova();
    this.facebookProvider = new Facebook({
      clientId: this.config.facebookAppId,
      appScope: ["email"]
    });
  }

  // public constructor(public navCtrl: NavController, private platform: Platform) {
  //     this.oauth = new CordovaOauth();
  //     this.provider = new Facebook({
  //         clientId: "CLIENT_ID_HERE",
  //         appScope: ["email"]
  //     });
  // }

  // public login() {
  //     this.platform.ready().then(() => {
    //     });
    // }
    
    loginFacebook() {
      console.log(this.facebookProvider);
      this.oauth.logInVia(this.facebookProvider).then((success) => {
          alert(JSON.stringify(success));
      }, (error) => {
          console.log(JSON.stringify(error));
      });
  }

  loginLinkedin() {
    
  } 
}
