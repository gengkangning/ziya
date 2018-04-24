import { Component } from '@angular/core';


import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import{ PublishPage } from '../publish/publish';
import { MinePage } from '../mine/mine';
import { MessagePage } from '../message/message';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PublishPage;
  tab3Root = MessagePage;
  tab4Root = MinePage;

  constructor() {

  }
}
