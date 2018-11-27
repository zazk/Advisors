import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service'
import { Componentes } from '../../models/componentes'
import { CmbRegister, Tipo } from '../../models/tipo'
import { ModelError } from '../../models/error'
import { LoginPage } from '../login/login'
//import { } from 'angular'

/*
  Generated class for the ForgottenPass page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-forgotten-pass',
  templateUrl: 'forgotten-pass.html'
})
export class ForgottenPassPage {

  dataCombo: CmbRegister;
  tipoD = [{}];
  tipoP = [{}];

  data = { TipoDocumento: '', Usuario: '', PregSecreta: '', RptaSecreta: '' }

  errorServ: ModelError[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private auth: AuthService, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
    let loader = this.loadingCtrl.create({
      content: "Espere por Favor..."
    });
    loader.present();

    loader.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgottenPassPage');
  }

  public enviar() {
    let loader = this.loadingCtrl.create({
      content: "Espere por Favor..."
    });
    loader.present();

    loader.dismiss();

  }

}
