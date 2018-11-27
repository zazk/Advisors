import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, LoadingController } from 'ionic-angular';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { AuthService } from '../../providers/auth-service';
import { LoginPage } from '../login/login';
import { DetalleSeguro } from '../../models/detalle-seguro'

/*
  Generated class for the Pagos page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-pagos',
    templateUrl: 'pagos.html'
})
export class PagosPage {

    detalle: DetalleSeguro = new DetalleSeguro()
    riesgo: string;

    varTemplateDetalle: SafeUrl;


    /*data para detalles */
    vehicular = {
        compania: 'La Positiva Seguros',
        url: 'assets/img/LaPositivaVida.png',
        nroPoliza: '1234567',
        riesgo: 'Vehículos',
        vehicular: [
            {
                tipoVehiculo: 'General',
                usoVehiculo: 'Particular',
                claseVehiculo: 'Camioneta',
                marcaVehiculo: 'Hyunday',
                modeloVehiculo: 'Santa Fe',
                motor: '12345asdfa6',
                anio: '216',
                chasis: 'g4fsdv34',
                placaTramite: 'NO'
            }
        ],
        soat: null,
        inmueble: null,
        maquinaria: null,
        transporte: null,
        otros: null,
        accidenteEscolar: null,
        asistenciaMedica: null,
        sctrPensiones: null,
        seguroViaje: null
    }

    inmueble = {
        compania: 'La Positiva Seguros',
        url: 'assets/img/LaPositivaVida.png',
        nroPoliza: '1234567',
        riesgo: 'Domiciliaria',
        vehicular: null,
        soat: null,
        inmueble: [
            {
                direccion: 'urb miramar de santa maria mollebaya arequipa',
                estructura: 'concreto armado',
                usoInmueble: 'Vivienda',
                anio: '216',
                numPisos: 3,
                numSotanos: 0
            }
        ],
        maquinaria: null,
        transporte: null,
        otros: null,
        accidenteEscolar: null,
        asistenciaMedica: null,
        sctrPensiones: null,
        seguroViaje: null
    }

    maquinaria = {
        compania: 'La Positiva Seguros',
        url: 'assets/img/LaPositivaVida.png',
        nroPoliza: '1234567',
        riesgo: 'Rot. de maquinaria',
        vehicular: null,
        soat: null,
        inmueble: null,
        maquinaria: [
            {
                descripcion: 'ascensor de 3 paradas',
                tipoMaquinaria: 'movil',
                marca: 'THYSSEN',
                modelo: 'UNIDAD N 134523',
                serie: 'sdfgh',
                ceroKm: false,
                direccion: 'urb miramar de santa maria mollebaya arequipa'
            }
        ],
        transporte: null,
        otros: null,
        accidenteEscolar: null,
        asistenciaMedica: null,
        sctrPensiones: null,
        seguroViaje: null
    }

    transporte = {
        compania: 'La Positiva Seguros',
        url: 'assets/img/LaPositivaVida.png',
        nroPoliza: '1234567',
        riesgo: 'Transporte - Nacional',
        vehicular: null,
        soat: null,
        inmueble: null,
        maquinaria: null,
        transporte: [
            {
                numAplicacion: 1,
                descripcionCompleta: 'Num Apicacio: 1 / Medio TRansporte : xxx/ lugar : TERRITORIO NACIONAL',
                fechaEmbarque: '2015-08-04T00:00:00',
                fechaLlegada: '2015-08-31T00:00:00',
                medioTransporte: 'Terrestre',
                tipoMercaderia: 'Varias',
                embalaje: 'Adecuado',
                procedencia: 'Territorio NAciona',
                destino: 'Territorio NAciona',
                estado: 'ok'
            }
        ],
        otros: null,
        accidenteEscolar: null,
        asistenciaMedica: null,
        sctrPensiones: null,
        seguroViaje: null
    }

    otros = {
        compania: 'La Positiva Seguros',
        url: 'assets/img/LaPositivaVida.png',
        nroPoliza: '1234567',
        riesgo: '3 - D',
        vehicular: null,
        soat: null,
        inmueble: null,
        maquinaria: null,
        transporte: null,
        otros: [
            {
                descripcion: 'Deshonestidad niminativa. US$33333 Clasificacion B: 58\r\n\u00ad clasificacion c:01'
            }
        ],
        accidenteEscolar: null,
        asistenciaMedica: null,
        sctrPensiones: null,
        seguroViaje: null
    }

    acEscolar = {
        compania: 'LA Positiva Seguros',
        url: 'assets/img/LaPositivaVida.png',
        nroPoliza: '1234567',
        riesgo: 'ACCIDENTE ESCOLAR',
        vehicular: null,
        soat: null,
        inmueble: null,
        maquinaria: null,
        transporte: null,
        otros: null,
        accidenteEscolar: [
            {
                documento: 'asf1veve4d01',
                nombre: 'Acuña Romero, Carlitos',
                condicion: 'Planillas',
                sede: 'nn',
                fechaIngreso: '2015-08-04T00:00:00',
                fechaInicio: '2015-08-04T00:00:00',
                fechaFin: '2015-08-04T00:00:00',
                estado: 'Vigente'
            }
        ],
        asistenciaMedica: null,
        sctrPensiones: null,
        seguroViaje: null
    }

    asistMedica = {
        compania: 'LA Positiva Seguros',
        url: 'assets/img/LaPositivaVida.png',
        nroPoliza: '1234567',
        riesgo: 'ASISTENCIA MEDICA',
        vehicular: null,
        soat: null,
        inmueble: null,
        maquinaria: null,
        transporte: null,
        otros: null,
        accidenteEscolar: null,
        asistenciaMedica: [
            {
                documento: 'asf1veve4d01',
                nombre: 'Acuña Romero, Carlitos',
                direccion: 'Calle jose Galvan 1214 dpto 23',
                dependientes: [
                    {
                        nombre: 'Acuña Diaz, Carlitos',
                        documento: 'asf1veve4d01',
                        parentesco: 'Hijo',
                        fechaNacimiento: '2015-08-04T00:00:00',
                        fechaIngreso: '2015-08-04T00:00:00',
                        estado: 'Vigente'
                    },
                    {
                        nombre: 'Acuña Diaz, Carlitos',
                        documento: 'asf1veve4d01',
                        parentesco: 'Hijo',
                        fechaNacimiento: '2015-08-04T00:00:00',
                        fechaIngreso: '2015-08-04T00:00:00',
                        estado: 'Vigente'
                    }
                ]
            }
        ],
        sctrPensiones: null,
        seguroViaje: null
    }

    str = {
        compania: 'LA Positiva Seguros',
        url: 'assets/img/LaPositivaVida.png',
        nroPoliza: '1234567',
        riesgo: 'SCTR PENSIONES',
        vehicular: null,
        soat: null,
        inmueble: null,
        maquinaria: null,
        transporte: null,
        otros: null,
        accidenteEscolar: null,
        asistenciaMedica: null,
        sctrPensiones: [
            {
                documento: 'asf1veve4d01',
                nombre: 'Acuña Romero, Carlitos',
                condicion: 'Planillas',
                sede: 'nn',
                fechaIngreso: '2015-08-04T00:00:00',
                estado: 'Vigente'
            },
            {
                documento: 'asf1veve4d01',
                nombre: 'Acuña Romero, Carlitos',
                condicion: 'Planillas',
                sede: 'nn',
                fechaIngreso: '2015-08-04T00:00:00',
                estado: 'Vigente'
            }
        ],
        segViaje: null
    }

    viaje = {
        compania: 'LA Positiva Seguros',
        url: 'assets/img/LaPositivaVida.png',
        nroPoliza: '1234567',
        riesgo: 'SEGURO DE VIAJE',
        vehicular: null,
        soat: null,
        inmueble: null,
        maquinaria: null,
        transporte: null,
        otros: null,
        accidenteEscolar: null,
        asistenciaMedica: null,
        sctrPensiones: null,
        seguroViaje: [
            {
                documento: 'asf1veve4d01',
                nombre: 'Acuña Romero, Carlitos',
                condicion: 'Planillas',
                sede: 'nn',
                fechaInicio: '2015-08-04T00:00:00',
                fechaFin: '2015-08-04T00:00:00',
                fechaIngreso: '2015-08-04T00:00:00',
                estado: 'Vigente'
            },
            {
                documento: 'asf1veve4d01',
                nombre: 'Acuña Romero, Carlitos',
                condicion: 'Planillas',
                sede: 'nn',
                fechaInicio: '2015-08-04T00:00:00',
                fechaFin: '2015-08-04T00:00:00',
                fechaIngreso: '2015-08-04T00:00:00',
                estado: 'Vigente'
            }
        ]
    }

    /* fin data para detalle*/

    constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthService
        , private viewCtrl: ViewController, private sanitizer: DomSanitizer, private loadingCtrl: LoadingController
    ) { }

    ionViewDidLoad() {
        console.log('ionViewDidLoad PagosPage');
        this.getDetalle(this.navParams.get('data'))
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

    getDetalle(data) {
        /*let loader = this.loadingCtrl.create({
            content: "Espere por Favor..."
        });
        loader.present();
*/
        switch (data) {
            case 1:
                var jsonD = JSON.stringify(this.vehicular)
                this.detalle = JSON.parse(jsonD);
                this.detalle.flagVehicular = true;
                break;
            case 2:
                var jsonD = JSON.stringify(this.inmueble)
                this.detalle = JSON.parse(jsonD);
                this.detalle.flagInmueble = true;
                break;
            case 3:
                var jsonD = JSON.stringify(this.maquinaria)
                this.detalle = JSON.parse(jsonD);
                this.detalle.flagMaquinaria = true;
                break;
            case 4:
                var jsonD = JSON.stringify(this.transporte)
                this.detalle = JSON.parse(jsonD);
                this.detalle.flagTransporte = true;
                break;
            case 5:
                var jsonD = JSON.stringify(this.otros)
                this.detalle = JSON.parse(jsonD);
                this.detalle.flagOtros = true;
                break;
            case 6:
                var jsonD = JSON.stringify(this.acEscolar)
                this.detalle = JSON.parse(jsonD);
                this.detalle.flagAccidenteEscolar = true;
                break;
            case 7:
                var jsonD = JSON.stringify(this.asistMedica)
                this.detalle = JSON.parse(jsonD);
                this.detalle.flagAsistenciaMedica = true;
                break;
            case 8:
                var jsonD = JSON.stringify(this.str)
                this.detalle = JSON.parse(jsonD);
                this.detalle.flagSctrPenciones = true;
                break;
            case 9:
                var jsonD = JSON.stringify(this.viaje)
                this.detalle = JSON.parse(jsonD);
                this.detalle.flagSeguroViaje = true;
                break;
            default:
                break;
        }

        //this.detalle = data;
        //this.detalle.flagVehicular = true;
        console.log(data)
        console.log(this.detalle)
        //loader.dismiss();

    }

    public logout() {
        this.auth.logout().subscribe(succ => {
            this.navCtrl.setRoot(LoginPage)
        });
    }

    templateVehicular = `<ion-list *ngFor="let vehiculo of detalle.vehicular">
                    <ion-item>
                        <ion-avatar item-left>
                            <ion-icon name="ionitron" item-left></ion-icon>
                        </ion-avatar>
                        <h3>Tipo de Vehículo</h3>
                        <h2>{{vehiculo.tipoVehiculo}}</h2>
                    </ion-item>
                    <ion-item>
                        <ion-avatar item-left>
                            <ion-icon name="construct" item-left></ion-icon>
                        </ion-avatar>
                        <h3>Uso de Vehículo</h3>
                        <h2>{{vehiculo.usoVehiculo}}</h2>
                    </ion-item>
                    <ion-item>
                        <ion-avatar item-left>
                            <ion-icon name="bus" item-left></ion-icon>
                        </ion-avatar>
                        <h3>Clase de Vehículo</h3>
                        <h2>{{vehiculo.claseVehiculo}}</h2>
                    </ion-item>
                    <ion-item>
                        <ion-avatar item-left>
                            <ion-icon name="paw" item-left></ion-icon>
                        </ion-avatar>
                        <h3>Marca</h3>
                        <h2>{{vehiculo.marcaVehiculo}}</h2>
                    </ion-item>
                    <ion-item>
                        <ion-avatar item-left>
                            <ion-icon name="key" item-left></ion-icon>
                        </ion-avatar>
                        <h3>Modelo</h3>
                        <h2>{{vehiculo.modeloVehiculo}}</h2>
                    </ion-item>
                    <ion-item>
                        <ion-avatar item-left>
                            <ion-icon name="flash" item-left></ion-icon>
                        </ion-avatar>
                        <h3>Motor</h3>
                        <h2>{{vehiculo.motor}}</h2>
                    </ion-item>
                    <ion-item>
                        <ion-avatar item-left>
                            <ion-icon name="timer" item-left></ion-icon>
                        </ion-avatar>
                        <h3>Año</h3>
                        <h2>{{vehiculo.anio}}</h2>
                    </ion-item>
                    <ion-item>
                        <ion-avatar item-left>
                            <ion-icon name="watch" item-left></ion-icon>
                        </ion-avatar>
                        <h3>Chasis</h3>
                        <h2>{{vehiculo.chasis}}</h2>
                    </ion-item>
                    <ion-item>
                        <ion-avatar item-left>
                            <ion-icon name="swap" item-left></ion-icon>
                        </ion-avatar>
                        <h3>Placa en Trámite</h3>
                        <h2>{{vehiculo.placaTramite}}</h2>
                    </ion-item>
                </ion-list>
            </ion-item>
        </ion-list>`

}
