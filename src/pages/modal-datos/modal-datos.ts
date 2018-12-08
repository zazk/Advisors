import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ViewController, AlertController, LoadingController } from 'ionic-angular';
import { Usuario, LoadDataActualizar, Entidad } from '../../models/usuario'
import { Componentes } from '../../models/componentes'
import { AuthService } from '../../providers/auth-service'
import { GlovalVars } from '../../providers/gloval-vars'
import { ModelError } from '../../models/error'
import { ModalForm } from '../modal-form/modal-form'

/*
  Generated class for the ModalDatos page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-modal-datos',
  templateUrl: 'modal-datos.html'
})
export class ModalDatosPage {

  user: Usuario
  loadData: LoadDataActualizar

  doc = { NumDocumento: '333333' }
  sexo = [{ cod: 'M', desc: 'Masculino' }, { cod: 'F', desc: 'Femenino' }]

  tipDocumento = [{}]
  tipDireccion = [{}]
  departamentos = [{}]
  selectedDep: string;
  selectedProv: string;
  provincias = [{}]
  distritos = [{}]
  data = {
    TipoEntidad: '', TipoDocumento: '', NumDocumento: '', Nombres: '', ApePaterno: '', ApeMaterno: '',
    FecNacimiento: new Date, Sexo: '', Ubigeo: '', TipoDireccion: '', DetalleDireccion: '', TelefonoMovil: '', Email: ''
  }
  myDate: String = new Date().toISOString();

  errorServ: ModelError[];

  ubigeoData: any;

  ubigeoCod = { CodigoTipo: '' }

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public viewCtrl: ViewController, 
    public alertCtrl: AlertController,
    public auth: AuthService, 
    public vars: GlovalVars, 
    public modalCtrl: ModalController,
    private loadingCtrl: LoadingController) {
    let loader = this.loadingCtrl.create({
      content: "Espere por Favor..."
    });
    loader.present();
    
    loader.dismiss();
  }

  ionViewDidLoad() {
  }

  openModalForm() {
    // When you want to open a page in a modal use the next two lines
    let modal = this.modalCtrl.create(ModalForm,{},{cssClass:"modal-editar"});
    modal.present();

    // If you wanna to push a Page in your navigation use this:
    // this.navCtrl.push(ModalForm);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
  

  
}
