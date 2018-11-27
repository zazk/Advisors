import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, AlertController, LoadingController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service'
import { Componentes } from '../../models/componentes'
import { ModelError } from '../../models/error'
import { GlovalVars } from '../../providers/gloval-vars'

/*
  Generated class for the ModalPassword page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-modal-password',
  templateUrl: 'modal-password.html'
})
export class ModalPasswordPage {

  data = { Usuario: '', Contrasenia: '', NewContrasenia: '', ConfirmarNewContrasenia: '' }

  errorServ: ModelError[];


  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController, public auth: AuthService, private alertCtrl: AlertController,
    private loadingCtrl: LoadingController, public vars: GlovalVars) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPasswordPage');
  }

  updatePassword() {
    var comp = new Componentes(this.alertCtrl, this.navCtrl);
    let loader = this.loadingCtrl.create({
      content: "Espere por Favor..."
    });
    loader.present();

    loader.dismiss();

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
