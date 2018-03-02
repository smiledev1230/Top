import { Component, Renderer } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-topup',
  templateUrl: 'topup.html',
})
export class TopupPage {

  constructor(public renderer: Renderer, public viewCtrl: ViewController) {
    this.renderer.setElementClass(viewCtrl.pageRef().nativeElement, 'page-topup', true);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad TopupPage');
  }

  set() {
    this.viewCtrl.dismiss('yes');
  }

  cancel() {
    this.viewCtrl.dismiss('no');
  }
}