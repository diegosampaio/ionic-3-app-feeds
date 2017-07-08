import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  public nome_usuario:string = "Diego de Souza";
  private num1:number = 5;
  private num2:number = 10;
  public total:number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public somaDoisNumeros(numero1:number, numero2:number):void{
      this.total = numero1 + numero2;
      //alert('Somatória: ' + this.total);
  }

  ionViewDidLoad() {

  }

}
