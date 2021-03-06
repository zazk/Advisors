import { Component } from '@angular/core';
import { Device } from '@ionic-native/device';
import { NavController, NavParams, AlertController, ModalController, ViewController, Platform, LoadingController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service'
import { } from 'ion-datetime-picker'
import { Componentes } from '../../models/componentes'
import { CmbRegister, Tipo } from '../../models/tipo'
import { ModelError } from '../../models/error'
import { LoginPage } from '../login/login'

/*
  Generated class for the Register page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  createSuccess = false;
  registerCredentials = {
    tipoDocumento: '', numDocumento: '', fecNacimiento: Date, Sexo: '', telefonoMovil: '',
    email: '', pregSecreta: '', rptaSecreta: '', acepPoliticas: Boolean
  }
  registerDispositivo = { DispositivoHash: '', modDispositivo: '', soDispositivo: '' }

  registerData = { usuario: this.registerCredentials, dispositivo: this.registerDispositivo }

  sexo = [{ cod: 'M', desc: 'Masculino' }, { cod: 'F', desc: 'Femenino' }]

  dataCombo: CmbRegister;
  tipoD = [];
  tipoP = [];

  errorServ: ModelError[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthService,
    private modalCtrl: ModalController, private plat: Platform, private alertCtrl: AlertController,
    private device: Device, private loadingCtrl: LoadingController) {
    let loader = this.loadingCtrl.create({
      content: "Espere por Favor..."
    });
    loader.present();

    loader.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');

  }

  public register() {
    let loader = this.loadingCtrl.create({
      content: "Espere por Favor..."
    });
    loader.present();

    loader.dismiss();

  }

  openPoliticaDP() {
    let modal = this.modalCtrl.create(ModalContentPage,{},{cssClass:"modal-terminos"});
    console.log("ok");
    let modalcurrent = document.querySelectorAll('.show-page'); 
    console.log(modalcurrent);
    modal.present();
  }
  customModal(){

  }

}




@Component({
  selector: 'page-register',
  templateUrl: 'modal_politicas.html',
  styleUrls: ['/pages/register/modal_politicas.scss']
})
export class ModalContentPage {
  textoPolitica;
  textoCabecera;

  constructor(
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    this.textoCabecera = "Términos y condiciones"
    this.textoPolitica = "<p>De conformidad con lo establecido en la Ley de Protección de Datos Personales – Ley Nº 29733 y su Reglamento, y conociendo el derecho fundamental a la protección de los datos personales, previsto en el artículo 2 numeral 6 de la Constitución Política del Perú; autorizo de forma expresa y libre a que mis datos personales sean registrados en el banco de datos personales de titularidad de Consejeros y Corredores de Seguros S.A., por el período que sea necesario para el tratamiento y transferencia, nacional e internacional de mis datos personales, incluyendo de ser necesario mis datos sensibles, a fin de ejecutar, gestionar y administrar la relación que mantengo con Consejeros y Corredores de Seguros S.A., así como para fines comerciales e informativos tales como el envío de comunicaciones, publicidad, promociones, encuestas o información en general de diferentes productos o servicios que se consideren de interés.</p>" +
      "<p>Asimismo, autorizo a Consejeros y Corredores de Seguros S.A. para compartir esta información, conforme a la legislación vigente, con las Compañías de Seguros para las finalidades antes indicadas. Los datos proporcionados podrán ser incorporados, para las mismas finalidades antes detalladas en el párrafo precedente, en los bancos de datos de terceros con los que ésta mantenga una relación contractual. En caso de no proporcionar los datos personales solicitados, Consejeros y Corredores de Seguros S.A. no podrá brindar los servicios correspondientes.</p>" +
      "<p>Conozco que puedo ejercer, conforme a la Ley, los derechos de información, acceso, actualización, inclusión, rectificación, supresión y oposición sobre mis datos personales, enviando una comunicación a Consejeros y Corredores de Seguros S.A. al correo electrónico: protecciondedatos@consejeros.com.pe</p>";
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
