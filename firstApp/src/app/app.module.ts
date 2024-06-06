import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { SignComponent } from './sign/sign.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { ItalienFoodComponent } from './italien-food/italien-food.component';
import { TunisianFoodComponent } from './tunisian-food/tunisian-food.component';
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
import { AuthComponent } from './auth/auth.component';
import { ToastrModule } from 'ngx-toastr';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PasswordComponent } from './password/password.component';


export class DemoLogonFormMaterial {}
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    HeaderComponent,

    SignComponent,
    HomeComponent,
    SearchComponent,
    ItalienFoodComponent,
    TunisianFoodComponent,
    JapanFoodComponent,
    SyrianFoodComponent,
    ContactComponent,
    ArdoiseComponent,
    CartComponent,
    TunisoisComponent,
    WeldHajjComponent,
    TamazertComponent,
    DosAmigosComponent,
    JosephComponent,
    SoltanaComponent,
    AuthComponent,
    PasswordComponent,


   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule, 
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
