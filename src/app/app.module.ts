import { NgModule, ErrorHandler } from "@angular/core";
import { HttpModule } from "@angular/http";
import { Device } from "@ionic-native/device";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { MyApp } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { ChartModule } from "angular2-highcharts";
import { HomePage } from "../pages/home/home";
import { LoginPage } from "../pages/login/login";
import { RegisterPage } from "../pages/register/register";
import { ForgottenPassPage } from "../pages/forgotten-pass/forgotten-pass";

import { PagosPage } from "../pages/pagos/pagos";
import { DetalleSegurosPagePage } from "../pages/detalle-seguros/detalle-seguros";
import { PerfilPage } from "../pages/perfil/perfil";
import { SegurosPage } from "../pages/seguros/seguros";
import { CotizadorSoatPage } from "../pages/cotizador-soat/cotizador-soat";
import { ModalContentPage } from "../pages/register/register";
import { ModalDatosPage } from "../pages/modal-datos/modal-datos";
import { ModalPasswordPage } from "../pages/modal-password/modal-password";
import { ModalPreguntaPage } from "../pages/modal-pregunta/modal-pregunta";
import { FormSolicitarSeguroPage } from "../pages/form-solicitar-seguro/form-solicitar-seguro";
import { AuthService } from "../providers/auth-service";
import { GlovalVars } from "../providers/gloval-vars";
import { ConnectivityService } from "../providers/connectivity-service";
import { InicioPage } from "../pages/inicio/inicio";
import { PuntoVentaPage } from "../pages/punto-venta/punto-venta";
import { SiniestroPage } from "../pages/siniestro/siniestro";
import { ContactoPage } from "../pages/contacto/contacto";
import { FormasPagoPage } from "../pages/formas-pago/formas-pago";
import { FormasPagoSliderPage } from "../pages/formas-pago-slider/formas-pago-slider";
//import { GoogleChart } from 'angular2-google-chart/directives/angular2-google-chart.directive'
import { AvisoSiniestroPage } from "../pages/aviso-siniestro/aviso.siniestro";
import { EvidenciasSiniestroPage } from "../pages/evidencias-siniestro/evidencias.siniestro";
import { InAppBrowser } from "@ionic-native/in-app-browser";
import { Network } from "@ionic-native/network";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

@NgModule({
  declarations: [
    MyApp,
    InicioPage,
    HomePage,
    LoginPage,
    RegisterPage,
    ModalContentPage,
    ForgottenPassPage,
    PagosPage,
    DetalleSegurosPagePage,
    PerfilPage,
    ModalDatosPage,
    ModalPasswordPage,
    ModalPreguntaPage,
    SegurosPage,
    CotizadorSoatPage,
    PuntoVentaPage,
    SiniestroPage,
    ContactoPage,
    FormSolicitarSeguroPage,
    FormasPagoPage,
    FormasPagoSliderPage,
    AvisoSiniestroPage,
    EvidenciasSiniestroPage
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      backButtonText: ""
    }),
    BrowserModule,
    HttpModule,
    ChartModule.forRoot("highcharts")
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InicioPage,
    HomePage,
    LoginPage,
    RegisterPage,
    ModalContentPage,
    ForgottenPassPage,
    PagosPage,
    DetalleSegurosPagePage,
    PerfilPage,
    ModalDatosPage,
    ModalPasswordPage,
    ModalPreguntaPage,
    SegurosPage,
    CotizadorSoatPage,
    PuntoVentaPage,
    SiniestroPage,
    ContactoPage,
    FormSolicitarSeguroPage,
    FormasPagoPage,
    FormasPagoSliderPage,
    AvisoSiniestroPage,
    EvidenciasSiniestroPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Network,
    AuthService,
    GlovalVars,
    ConnectivityService,
    Device,
    InAppBrowser,
    StatusBar,
    SplashScreen
  ]
})
export class AppModule {}
