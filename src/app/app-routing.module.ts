import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { FormulesComponent } from './formules/formules.component';
import { PlanificationComponent } from './planification/planification.component';
import { ReserveaslotComponent } from './reserveaslot/reserveaslot.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : 'planning', component : PlanificationComponent},
  {path : 'reserver', component: ReserveaslotComponent},
  {path : 'connexion', component: SigninComponent},
  {path : 'inscription', component: SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
