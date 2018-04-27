import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReproductorComponent } from './reproductor/reproductor.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {AuthService} from './auth.service';
import {FormsModule} from '@angular/forms';

import {environment} from '../environments/environment';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';





@NgModule({
  declarations: [
    AppComponent,
    ReproductorComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    UsuariosComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
