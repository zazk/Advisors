import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController, ViewController, ModalController, Platform } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { GlovalVars } from '../../providers/gloval-vars';
import { Device } from '@ionic-native/device';
import { CallNumber } from '@ionic-native/call-number';
import { saveAs } from "file-saver";

@Component({
    selector: 'evidencias-siniestro-page',
    templateUrl: 'evidencias.siniestro.html'
})
export class EvidenciasSiniestroPage {
    public model:any = {numDocumento:"", numPlaca:""};
    public mask = [/[0-9 a-z A-Z]/, /[0-9 a-z A-Z]/, /[0-9 a-z A-Z]/, '-', /[0-9]/, /[0-9]/, /[0-9]/];
    public tieneSolicitudes:boolean = false;
    public data:any[] = [];
    constructor(
        public navCtrl: NavController, public navParams: NavParams, private auth: AuthService,
        private modalCtrl: ModalController, private plat: Platform, private alertCtrl: AlertController,
        private device: Device, private loadingCtrl: LoadingController,
        public globalService: GlovalVars,
    ) {
        
    }
    public registrar() {
        let placa = "" + this.model.numPlaca;
        
    }
    reloadData() {
        let placa = "" + this.model.numPlaca;
    }
    cargarRequisito(index_parent:number, index:number, event, _file) {
        
        
    }
    descargarArchivo(element) {
        
    }
}