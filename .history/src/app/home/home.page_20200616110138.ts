import { Component } from "@angular/core";
import { BackgroundGeolocation } from "@ionic-native/background-geolocation/ngx";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  constructor(private backgroundGeolocation: BackgroundGeolocation) {}

  startBG() {
    this.backgroundGeolocation.start();
  }
}
