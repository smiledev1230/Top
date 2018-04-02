import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { RestServiceProvider } from '../../providers/rest';
import { LoadingProvider } from '../../providers/loading';
@Component({
  selector: 'page-verify-pin',
  templateUrl: 'verify-pin.html',
})
export class VerifyPinPage {
  public pin_code:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestServiceProvider, public loadingProvider: LoadingProvider) {
  }

  ionViewDidLoad() {

  }
  nextPage() {
    if (this.pin_code.length ==4 || this.pin_code.length==5) {
      this.loadingProvider.show();
      this.restProvider.getHttp(this.restProvider.validateSMS(this.pin_code)).then((response)=> {
        console.log(response);
        this.loadingProvider.hide();
        if (response && response.auth_token) {
          this.navCtrl.push(RegisterPage);
        }
      });
    }
  }
}
