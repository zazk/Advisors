import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController, Loading, ModalController } from 'ionic-angular';
import { PagosPage } from '../pagos/pagos';
import { AuthService } from '../../providers/auth-service';
import { GlovalVars } from '../../providers/gloval-vars';
import { LoginPage } from '../login/login';
import { Compania, Riesgo, Poliza } from '../../models/seguro';
import { ChartModule } from 'angular2-highcharts';
import { FormasPagoSliderPage } from '../formas-pago-slider/formas-pago-slider'


/*
  Generated class for the Seguros page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

declare var require: any;
var hcharts = require('highcharts');
require('highcharts/modules/exporting')(hcharts);

@Component({
  selector: 'page-seguros',
  templateUrl: 'seguros.html'
})
export class SegurosPage {
  @ViewChild('myChart') canvas: ElementRef;
  /*
imports:[
  IonicModule.forRoot(MyApp),
      ChartModule.forRoot(require('highcharts'))
]  */

  bancos: String[] = ['assets/icon/BBVA-300.png', 'assets/icon/BCP-300.png', 'assets/icon/interbank-400.png', 'assets/icon/scotiabank-500.png']

  doc = { Usuario: '234' }

  titulo: string;
  flag: any;

  companias: Compania[];
  riesgos: Riesgo[];
  companiasp: Poliza[];
  loading: Loading;
  options: any;
  yLabels = ['Pendiente', 'Cancelado'];

  public bubble_ChartData = []
  public bubble_ChartOptions = {}


  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthService
    , private loadingCtrl: LoadingController, private alertCtrl: AlertController,
    public modalCtrl: ModalController, public vars: GlovalVars) {
    this.titulo = this.navParams.get('titulo');
    this.flag = this.navParams.get('flag');


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SegurosPage');
    if (this.flag === 0) {
      this.getSeguros('MisSeguros');
    }
    if (this.flag === 1) {
      this.getSeguros('PendientesPago');
    }
    //this.setChart();
    this.demosetdata();
  }

  goPagos() {
    this.navCtrl.setRoot(PagosPage);
  }

  openDatelle(poliza) {
    let modal = this.modalCtrl.create(PagosPage, { data: poliza.codigoPoliza });
    modal.present();
  }

  goComoPagar() {
    let modal = this.modalCtrl.create(FormasPagoSliderPage);
    modal.present();
  }

  openDocumento(poliza, grupoRiesgo) {
    var jsonData = JSON.stringify({
      usuario: '123456', codigoContratante: poliza.codigoContratante,
      codigoSucursal: poliza.sucursal, grupoSeguro: grupoRiesgo
    })
    let modal = this.modalCtrl.create(PagosPage, { data: jsonData });
    modal.present();
  }

  public logout() {
    this.auth.logout().subscribe(succ => {
      this.navCtrl.setRoot(LoginPage)
    });
  }

  public getSeguros(servicio) {
    let loader = this.loadingCtrl.create({
      content: "Espere por Favor..."
    });
    loader.present();

    this.companias = []

    var comp = new Compania()
    comp.codigoCompania = 1
    comp.compania = 'POSITIVA'
    comp.displayIt = true;
    comp.url = 'assets/img/LaPositivaVida.png'

    comp.polizas = []

    var riesgo = new Riesgo()
    riesgo.codigoRiesgo = 1
    riesgo.grupoSeguro = 'asd'
    riesgo.nomRiesgo = 'Vehicular'

    riesgo.polizas = []


    var poliz = new Poliza()
    poliz.codigoPoliza = 1
    poliz.codigoContratante = 1
    poliz.numPoliza = '12345'
    poliz.codigoRiesgo = 1
    poliz.grupoSeguro = 'asd'
    poliz.nomRiesgo = 'Vehicular'
    poliz.moneda = 'S/'
    poliz.fecFin = new Date();
    poliz.fecInicio = new Date();
    poliz.estado = 'Vigente'
    poliz.nroFinanciamiento = '123456'
    poliz.actualizado = new Date();
    poliz.displayCuotas = false;
    poliz.displayPAyment = false;
    poliz.clienteDirecto = true;
    comp.polizas.push(poliz)

    var polizInm = new Poliza()
    polizInm.codigoPoliza = 2
    polizInm.codigoContratante = 1
    polizInm.numPoliza = '12345'
    polizInm.codigoRiesgo = 1
    polizInm.grupoSeguro = 'asd'
    polizInm.nomRiesgo = 'Inmueble'
    polizInm.moneda = 'S/'
    polizInm.fecFin = new Date();
    polizInm.fecInicio = new Date();
    polizInm.estado = 'Vigente'
    polizInm.nroFinanciamiento = '123456'
    polizInm.actualizado = new Date();
    polizInm.displayCuotas = false;
    polizInm.displayPAyment = false;
    polizInm.clienteDirecto = false;
    comp.polizas.push(polizInm)

    var polizMaqui = new Poliza()
    polizMaqui.codigoPoliza = 3
    polizMaqui.codigoContratante = 1
    polizMaqui.numPoliza = '12345'
    polizMaqui.codigoRiesgo = 1
    polizMaqui.grupoSeguro = 'asd'
    polizMaqui.nomRiesgo = 'Maquinaria'
    polizMaqui.moneda = 'S/'
    polizMaqui.fecFin = new Date();
    polizMaqui.fecInicio = new Date();
    polizMaqui.estado = 'Vigente'
    polizMaqui.nroFinanciamiento = '123456'
    polizMaqui.actualizado = new Date();
    polizMaqui.displayCuotas = false;
    polizMaqui.displayPAyment = false;
    polizMaqui.clienteDirecto = true;
    comp.polizas.push(polizMaqui)

    var polizTrans = new Poliza()
    polizTrans.codigoPoliza = 4
    polizTrans.codigoContratante = 1
    polizTrans.numPoliza = '12345'
    polizTrans.codigoRiesgo = 1
    polizTrans.grupoSeguro = 'asd'
    polizTrans.nomRiesgo = 'Transporte'
    polizTrans.moneda = 'S/'
    polizTrans.fecFin = new Date();
    polizTrans.fecInicio = new Date();
    polizTrans.estado = 'Vigente'
    polizTrans.nroFinanciamiento = '123456'
    polizTrans.actualizado = new Date();
    polizTrans.displayCuotas = false;
    polizTrans.displayPAyment = false;
    polizTrans.clienteDirecto = false;
    comp.polizas.push(polizTrans)

    var polizOtros = new Poliza()
    polizOtros.codigoPoliza = 5
    polizOtros.codigoContratante = 1
    polizOtros.numPoliza = '12345'
    polizOtros.codigoRiesgo = 1
    polizOtros.grupoSeguro = 'asd'
    polizOtros.nomRiesgo = 'Otro'
    polizOtros.moneda = 'S/'
    polizOtros.fecFin = new Date();
    polizOtros.fecInicio = new Date();
    polizOtros.estado = 'Vigente'
    polizOtros.nroFinanciamiento = '123456'
    polizOtros.actualizado = new Date();
    polizOtros.displayCuotas = false;
    polizOtros.displayPAyment = false;
    polizOtros.clienteDirecto = true;
    comp.polizas.push(polizOtros)

    var polizAccEscolar = new Poliza()
    polizAccEscolar.codigoPoliza = 6
    polizAccEscolar.codigoContratante = 1
    polizAccEscolar.numPoliza = '12345'
    polizAccEscolar.codigoRiesgo = 1
    polizAccEscolar.grupoSeguro = 'asd'
    polizAccEscolar.nomRiesgo = 'Accidentes escolares'
    polizAccEscolar.moneda = 'S/'
    polizAccEscolar.fecFin = new Date();
    polizAccEscolar.fecInicio = new Date();
    polizAccEscolar.estado = 'Vigente'
    polizAccEscolar.nroFinanciamiento = '123456'
    polizAccEscolar.actualizado = new Date();
    polizAccEscolar.displayCuotas = false;
    polizAccEscolar.displayPAyment = false;
    polizAccEscolar.clienteDirecto = false;
    comp.polizas.push(polizAccEscolar)

    var polizAsisMEdica = new Poliza()
    polizAsisMEdica.codigoPoliza = 7
    polizAsisMEdica.codigoContratante = 1
    polizAsisMEdica.numPoliza = '12345'
    polizAsisMEdica.codigoRiesgo = 1
    polizAsisMEdica.grupoSeguro = 'asd'
    polizAsisMEdica.nomRiesgo = 'Asistencia médica'
    polizAsisMEdica.moneda = 'S/'
    polizAsisMEdica.fecFin = new Date();
    polizAsisMEdica.fecInicio = new Date();
    polizAsisMEdica.estado = 'Vigente'
    polizAsisMEdica.nroFinanciamiento = '123456'
    polizAsisMEdica.actualizado = new Date();
    polizAsisMEdica.displayCuotas = false;
    polizAsisMEdica.displayPAyment = false;
    polizAsisMEdica.clienteDirecto = true;
    comp.polizas.push(polizAsisMEdica)

    var polizSCTR = new Poliza()
    polizSCTR.codigoPoliza = 8
    polizSCTR.codigoContratante = 1
    polizSCTR.numPoliza = '12345'
    polizSCTR.codigoRiesgo = 1
    polizSCTR.grupoSeguro = 'asd'
    polizSCTR.nomRiesgo = 'SCTR Pensiones'
    polizSCTR.moneda = 'S/'
    polizSCTR.fecFin = new Date();
    polizSCTR.fecInicio = new Date();
    polizSCTR.estado = 'Vigente'
    polizSCTR.nroFinanciamiento = '123456'
    polizSCTR.actualizado = new Date();
    polizSCTR.displayCuotas = false;
    polizSCTR.displayPAyment = false;
    polizSCTR.clienteDirecto = false;
    comp.polizas.push(polizSCTR)

    var polizSegViaje = new Poliza()
    polizSegViaje.codigoPoliza = 9
    polizSegViaje.codigoContratante = 1
    polizSegViaje.numPoliza = '12345'
    polizSegViaje.codigoRiesgo = 1
    polizSegViaje.grupoSeguro = 'asasdafwefwefd'
    polizSegViaje.nomRiesgo = 'Seguro de viaje'
    polizSegViaje.moneda = 'S/'
    polizSegViaje.fecFin = new Date();
    polizSegViaje.fecInicio = new Date();
    polizSegViaje.estado = 'Vigente'
    polizSegViaje.nroFinanciamiento = '123456'
    polizSegViaje.actualizado = new Date();
    polizSegViaje.displayCuotas = false;
    polizSegViaje.displayPAyment = false;
    polizSegViaje.clienteDirecto = true;
    comp.polizas.push(polizSegViaje)


    /* pinkxel: Se añadió un push adicional por efectos de maquetación */
    riesgo.polizas.push(poliz)

    //comp.polizas.push(poliz)

    this.companias.push(comp);

    loader.dismiss();

  }

   /* pinkxel: Se agregó $event para detener el evento click del padre */

  openMore(seg, $event) {
    $event.stopPropagation();
    if (seg.displayPAyment) {
      seg.displayPAyment = false;
      seg.displayCuotas = true;
    } else {
      seg.displayPAyment = true;
      seg.displayCuotas = false;
    }
  }

  openData(data) {
    if (data.displayIt) {
      data.displayIt = false;
    } else {
      data.displayIt = true;
    }

  }

  demosetdata() {
    this.bubble_ChartData = [
      ['ID', 'Life Expectancy', 'Fertility Rate', 'Region', 'Population'],
      ['CAN', 80.66, 1.67, 'North America', 33739900],
      ['DEU', 79.84, 1.36, 'Europe', 81902307],
      ['DNK', 78.6, 1.84, 'Europe', 5523095],
      ['EGY', 72.73, 2.78, 'Middle East', 79716203],
      ['GBR', 80.05, 2, 'Europe', 61801570],
      ['IRN', 72.49, 1.7, 'Middle East', 73137148],
      ['IRQ', 68.09, 4.77, 'Middle East', 31090763],
      ['ISR', 81.55, 2.96, 'Middle East', 7485600],
      ['RUS', 68.6, 1.54, 'Europe', 141850000],
      ['USA', 78.09, 2.05, 'North America', 307007000]
    ];
    this.bubble_ChartOptions = {
      title: 'Correlation between life expectancy, fertility rate ' +
      'and population of some world countries (2010)',
      hAxis: { title: 'Life Expectancy' },
      vAxis: { title: 'Fertility Rate' },
      bubble: { textStyle: { fontSize: 11 } }

    };
  }

}
