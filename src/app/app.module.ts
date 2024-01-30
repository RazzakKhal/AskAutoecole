import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomeComponent } from './home/home/home.component';
import { AdvantageComponent } from './home/advantage/advantage.component';
import { FormulaComponent } from './home/formula/formula.component';
import { MonitorComponent } from './home/monitor/monitor.component';
import { PictureComponent } from './home/picture/picture.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { FormulesComponent } from './formules/formules.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { PlanificationComponent } from './planification/planification.component';
import { ReserveaslotComponent } from './reserveaslot/reserveaslot.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AdvantageComponent,
    FormulaComponent,
    MonitorComponent,
    PictureComponent,
    MenuComponent,
    FormulesComponent,
    SigninComponent,
    SignupComponent,
    PlanificationComponent,
    ReserveaslotComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
