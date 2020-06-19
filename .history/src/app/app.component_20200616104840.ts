import { Component } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import {
  BackgroundGeolocation,
  BackgroundGeolocationLocationProvider,
  BackgroundGeolocationEvents,
} from "@ionic-native/background-geolocation/ngx";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private backgroundGeolocation: BackgroundGeolocation
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.backgroundGeolocation
        .configure({
          locationProvider: 2,
          desiredAccuracy: 0,
          stationaryRadius: 5,
          startForeground: true,
          distanceFilter: 0,
          notificationTitle: "Background tracking",
          notificationText: "fully enabled",
          fastestInterval: 1 * 500, // 0.5 seconds
          interval: 2 * 1000, // 1 seconds
          debug: true,
          stopOnTerminate: false,
          pauseLocationUpdates: false,
          saveBatteryOnBackground: false,
          startOnBoot: true,
        })
        .then(() => {
          this.backgroundGeolocation.start();
          this.backgroundGeolocation
            .on(BackgroundGeolocationEvents.location)
            .subscribe((location) => console.log(location));
        });
    });
  }
}
