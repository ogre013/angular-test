import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServerComponent} from "./server/server.component";


import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from "./alerts/warning-alert/warning-alert.component";
import { SuccessAlertComponent} from "./alerts/success-alert/success-alert.component";
import { InfoAlertComponent } from './alerts/info-alert/info-alert.component';
import { DangerAlertComponent } from './alerts/danger-alert/danger-alert.component';
import { SomeComponent } from './binding/some/some.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    InfoAlertComponent,
    DangerAlertComponent,
    SomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
