import { NavController, AlertController} from 'ionic-angular';


export class  Componentes {

createSuccess = false;

    constructor(private alertCtrl: AlertController, private navCtrl:NavController) {
    }


public showPopup(title, text) {
    let alert = this.alertCtrl.create({
        title: title,
        subTitle: text,
        buttons: [
            {
                text: 'Aceptar',
                handler: data => {
                    if (this.createSuccess) {
                        this.navCtrl.popToRoot();
                    }
                }
            }
        ],
        cssClass:'alertCustom'
    });
    alert.present();
}

}