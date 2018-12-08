import { Component, ViewChild, ElementRef } from '@angular/core';
import { 
    NavController, 
    NavParams, 
    AlertController, 
    LoadingController, 
    ViewController, 
    ModalController, 
    Platform 
} from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { GlovalVars } from '../../providers/gloval-vars';
import { Device } from '@ionic-native/device';
import { ModalAvisoLlamar } from '../modal-aviso-llamar/modal-aviso-llamar';
@Component({
    selector: 'aviso-siniestro-page',
    templateUrl: 'aviso.siniestro.html'
})
export class AvisoSiniestroPage {
    viewMode = 'tab1';
    public model:any = {numDocumento:"", numPlaca:""};
    public mask = [/[0-9 a-z A-Z]/, /[0-9 a-z A-Z]/, /[0-9 a-z A-Z]/, '-', /[0-9]/, /[0-9]/, /[0-9]/];
    constructor(
        public navCtrl: NavController, public navParams: NavParams, private auth: AuthService,
        private modalCtrl: ModalController, private plat: Platform, private alertCtrl: AlertController,
        private device: Device, private loadingCtrl: LoadingController,
        public globalService: GlovalVars
        ) {
    }
    public registrar() {

    }
    openModalLlamar() {
    // When you want to open a page in a modal use the next two lines
    let modal = this.modalCtrl.create(ModalAvisoLlamar,{},{cssClass:"modal-aviso-llamar"});
    modal.present();

    // If you wanna to push a Page in your navigation use this:
    // this.navCtrl.push(ModalForm);
    }    
}