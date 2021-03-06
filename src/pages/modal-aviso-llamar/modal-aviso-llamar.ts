import { Component } from "@angular/core";
import { EnLlamada } from '../en-llamada/en-llamada'
import {
  NavController,
  ModalController,
  NavParams,
  MenuController,
  ToastController,
  ViewController
} from "ionic-angular";

@Component({
  selector: "modal-aviso-llamar",
  templateUrl: "modal-aviso-llamar.html"
  
})
export class ModalAvisoLlamar {
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public navParams: NavParams,
    public menu: MenuController,
    public viewCtrl: ViewController,
    private toastCtrl: ToastController
  ) {}


  dismiss() {
    this.viewCtrl.dismiss();
  }
  goEnLlamada(){
    // If you wanna to push a Page in your navigation use this:
    this.navCtrl.push(EnLlamada);
    
  }

}
