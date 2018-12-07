import { Component } from '@angular/core';
import { NavController,ModalController, NavParams, MenuController, ToastController } from 'ionic-angular';


@Component({
  selector: 'modal-form',
  templateUrl: 'modal-form.html'
})
export class ModalForm {
 

  constructor(
    public navCtrl: NavController, 
    public modalCtrl: ModalController,
    public navParams: NavParams,
    public menu: MenuController, 
    private toastCtrl: ToastController) {

    
  }


}


 