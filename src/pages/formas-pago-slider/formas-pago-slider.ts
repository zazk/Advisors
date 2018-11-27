import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/*
  Generated class for the FormasPagoSlider page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-formas-pago-slider',
  templateUrl: 'formas-pago-slider.html'
})
export class FormasPagoSliderPage {

  slides: String[] = ['assets/img/adventure-cat.png', 'assets/img/gangnamtocat.png', 'assets/img/plumbercat.jpg'];

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormasPagoSliderPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
