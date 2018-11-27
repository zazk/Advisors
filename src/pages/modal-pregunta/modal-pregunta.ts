import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, LoadingController, AlertController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service'
import { Componentes } from '../../models/componentes'
import { ModelError } from '../../models/error'
import { Tipo } from '../../models/tipo'
import { GlovalVars } from '../../providers/gloval-vars'

/*
  Generated class for the ModalPregunta page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-modal-pregunta',
  templateUrl: 'modal-pregunta.html'
})
export class ModalPreguntaPage {

  preguntas: Tipo[] = []

  errorServ: ModelError[];

  data = { Usuario: '', PregSecreta: '', RptaSecreta: '' }

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController, public auth: AuthService, private alertCtrl: AlertController,
    private loadingCtrl: LoadingController, public vars: GlovalVars) {
    let loader = this.loadingCtrl.create({
      content: "Espere por Favor..."
    });
    loader.present();

    loader.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPreguntaPage');
  }

  updateData() {
    
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
