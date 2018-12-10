import { Component, ViewChild } from "@angular/core";
import { Platform, MenuController, Nav, Events } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { LoginPage } from "../pages/login/login";
import { HomePage } from "../pages/home/home";
import { SegurosPage } from "../pages/seguros/seguros";
import { PerfilPage } from "../pages/perfil/perfil";
import { AvisoSiniestroPage } from "../pages/aviso-siniestro/aviso.siniestro";
import { PuntoVentaPage } from "../pages/punto-venta/punto-venta";
import { SiniestroPage } from "../pages/siniestro/siniestro";
import { ContactoPage } from "../pages/contacto/contacto";
import { AuthService } from "../providers/auth-service";
import { InicioPage } from "../pages/inicio/inicio";
import { FormasPagoPage } from "../pages/formas-pago/formas-pago";
import { EstadoCuenta } from "../pages/estado-cuenta/estado-cuenta";

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage = LoginPage;
  flagMenu: boolean = false;

  data = { nombre: "", email: "" };
  dataSiniestros = [{}];
  isOpenSubmenu = false;

  pages: Array<{ icon: string; titulo: string; component: any; flag: number }>;
  pagesHidden: Array<{
    icon: string;
    titulo: string;
    component: any;
    flag: number;
  }>;

  constructor(
    platform: Platform,
    public menu: MenuController,
    private auth: AuthService,
    public events: Events,
    statusBar: StatusBar,
    splashScreen: SplashScreen
  ) {
    platform.ready().then(() => {
      this.flagMenu = false;
      statusBar.styleDefault();
      splashScreen.hide();
      this.loadDefaultMenu();
    });
  }

  loadDefaultMenu() {
    this.pages = [
      // { icon: "nico-nav-1", titulo: "Inicio", component: HomePage, flag: 0 },
      // {
      //   icon: "nico-nav-2",
      //   titulo: "Mis Seguros",
      //   component: SegurosPage,
      //   flag: 0
      // },
      // {
      //   icon: "alert",
      //   titulo: "Pendientes de Pago",
      //   component: SegurosPage,
      //   flag: 1
      // },
      {
        icon: "nico-nav-3",
        titulo: "Punto de Venta SOAT",
        component: PuntoVentaPage,
        flag: 0
      },
      {
        icon: "nico-nav-4",
        titulo: "Contáctenos",
        component: PuntoVentaPage,
        flag: 0
      },
      {
        icon: "nico-nav-5",
        titulo: "Estado de Cuenta",
        component: EstadoCuenta,
        flag: 0
      },
      {
        icon: "nico-nav-6",
        titulo: "Reporte de Siniestro",
        component: AvisoSiniestroPage,
        flag: 0
      }
      // {
      //   icon: "pricetag",
      //   titulo: "Formas de Pago WEB",
      //   component: FormasPagoPage,
      //   flag: 0
      // }
    ];
    this.pagesHidden = [
      { icon: "body", titulo: "Mi perfil", component: PerfilPage, flag: 0 },
      { icon: "log-out", titulo: "Cerrar Sesión", component: null, flag: 0 }
    ];
  }

  openHome() {
    this.openMenu({ titulo: "Inicio", component: HomePage, flag: 0 });
  }
  openMenu(page) {
    if (page.component === null) {
      this.logout();
    } else {
      this.menu.close();
      this.nav.setRoot(page.component, {
        titulo: page.titulo,
        flag: page.flag
      });
      console.log(page);
    }
  }

  showMenu() {
    this.flagMenu = !this.flagMenu;
    console.log(this.flagMenu);
  }

  toggleSubMenu() {
    this.isOpenSubmenu = !this.isOpenSubmenu;
    console.log(this.isOpenSubmenu);
  }

  setPages(data) {
    this.pages = data;
  }

  logout() {
    this.menu.close();
    this.nav.setRoot(LoginPage);
  }

  setMapa(row) {}
}
