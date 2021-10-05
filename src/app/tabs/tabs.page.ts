import { Component } from '@angular/core';
import { NotificationService } from '@rebase-team/notification';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private notification: NotificationService) {
    this.notification.show(3542, 
      "myApp", 
      "Título!", 
      "Texto de notificação...", 
      "public/assets/icon/favicon.png");
  }

}
