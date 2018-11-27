import { Component } from '@angular/core';
import { NavController, NavParams,ViewController } from 'ionic-angular';

/*
  Generated class for the FormSolicitarSeguro page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-form-solicitar-seguro',
  templateUrl: 'form-solicitar-seguro.html'
})
export class FormSolicitarSeguroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormSolicitarSeguroPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
