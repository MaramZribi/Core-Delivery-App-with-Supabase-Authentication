import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { SignComponent } from './sign/sign.component';
import { SearchComponent } from './search/search.component';
import { TunisianFoodComponent } from './tunisian-food/tunisian-food.component';
import { ItalienFoodComponent } from './italien-food/italien-food.component';
import { JapanFoodComponent } from './japan-food/japan-food.component';
import { SyrianFoodComponent } from './syrian-food/syrian-food.component';
import { ContactComponent } from './contact/contact.component';
import { ArdoiseComponent } from './italien-food/restaurant/ardoise/ardoise.component';
import { CartComponent } from './cart/cart.component';
import { TunisoisComponent } from './tunisian-food/restaurant/tunisois/tunisois.component';
import { WeldHajjComponent } from './tunisian-food/restaurant/weld-hajj/weld-hajj.component';
import { TamazertComponent } from './tunisian-food/restaurant/tamazert/tamazert.component';
import { DosAmigosComponent } from './tunisian-food/restaurant/dos-amigos/dos-amigos.component';
import { JosephComponent } from './tunisian-food/restaurant/joseph/joseph.component';
import { SoltanaComponent } from './tunisian-food/restaurant/soltana/soltana.component';
import { PasswordComponent } from './password/password.component';

const routes: Routes = [
  {path: 'home' , component: HomeComponent},
  {path: 'auth' , component: AuthComponent},
  {path: 'sign' , component:SignComponent},
  {path: 'tunisian' , component:TunisianFoodComponent},
  {path: 'italien' , component:ItalienFoodComponent},
  {path: 'japan' , component:JapanFoodComponent},
  {path: 'syrian' , component:SyrianFoodComponent},
  {path: 'contact' , component:ContactComponent},
  {path: 'ardoise' , component:ArdoiseComponent},
  {path: 'cart' , component:CartComponent},
  {path: 'tunisois' , component:TunisoisComponent},
  {path: 'hajj' , component:WeldHajjComponent},
  {path: 'chaneb' , component:TamazertComponent},
  {path: 'amigos' , component:DosAmigosComponent},
  {path: 'joseph' , component:JosephComponent},
  {path: 'soltana' , component:SoltanaComponent},
  {path: 'password' , component:PasswordComponent},

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
