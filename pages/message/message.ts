import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MessageInfoPage } from '../message-info/message-info';

/**
 * Generated class for the MessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagePage');
  }
  messageArr = [
    {
      'imgURL':'assets/imgs/mineHead1.jpg',
      'title':'JAMES',
      'content':'AFJFKDDJSGS',
      'time':'8:00'
    },
    {
      'imgURL':'assets/imgs/mineHead1.jpg',
      'title':'ABC',
      'content':'SSSSSSSSSSSSSSS',
      'time':'8:00'
    },
    {
      'imgURL':'assets/imgs/mineHead1.jpg',
      'title':'KOBE',
      'content':'AAAAAAAAAAAAAAAAAAAAAA',
      'time':'8:00'
    },
     {
      'imgURL':'assets/imgs/mineHead.png',
      'title':'KOBEQJF',
      'content':'AAAAAAAAAAAAAAAAAAAAAAAFAFDSFAAFSDFD',
      'time':'8:00'
    }
  ]
  goMessageInfo(item){
    // console.log(item);
    this.navCtrl.push(MessageInfoPage,{item:item});
  }
}
