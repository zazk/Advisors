import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController, ModalController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { LoginPage } from '../login/login';
import { FormSolicitarSeguroPage } from '../form-solicitar-seguro/form-solicitar-seguro'

/*
  Generated class for the CotizadorSoat page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-cotizador-soat',
  templateUrl: 'cotizador-soat.html'
})
export class CotizadorSoatPage {

  anio: number = 2017;
  valor: number = 2000;
  showProducts = false;

  constructor(public navCtrl: NavController, public navParams: NavParams
    , private auth: AuthService, public alertCtrl: AlertController, public toastCtrl: ToastController,
    public modalCtrl: ModalController) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CotizadorSoatPage');
  }

  public logout() {
    this.auth.logout().subscribe(succ => {
      this.navCtrl.setRoot(LoginPage)
    });
  }

  cotizar() {
    this.showProducts = true;
  }

  public solicitar() {
    let alertP = this.alertCtrl.create({
      title: 'Solicitar',
      subTitle: 'Para solicitar este producto, elija el método por el cual quiere realizar el proceso.',
      buttons: [
        {
          text: 'Le llamamos',
          handler: () => {
            let toast = this.toastCtrl.create({
              message: 'En breve recibira una llamada de uno de nuestros colaboradores.',
              duration: 4500
            });
            toast.present();
            alertP.dismiss();
          }
        },
        {
          text: 'Llenar formulario',
          handler: () => {
            this.openFormulario();
            alertP.dismiss();
          }
        }
      ],
      cssClass: 'alertCustom',


    });
    alertP.present();
  }

  openFormulario() {
    let modal = this.modalCtrl.create(FormSolicitarSeguroPage);
    console.log("ok");
    modal.present();
  }

}
