import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen'
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(private menuController: MenuController) {
    this.initializeApp();
  }

  initializeApp() {
    /* To make sure we provide the fastest app loading experience
       for our users, hide the splash screen automatically
       when the app is ready to be used:

        https://capacitor.ionicframework.com/docs/apis/splash-screen#hiding-the-splash-screen
    */
    SplashScreen.hide();
    this.menuController.enable(true, 'appMenu');
  }
}
