import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';

import { AppComponent } from './app.component';
import { ReproductorComponent } from './reproductor/reproductor.component';
import { FormularioRegistrarUsuarioComponent } from './formulario-registrar-usuario/formulario-registrar-usuario.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InterfazRetosComponent } from './interfaz-retos/interfaz-retos.component';

@NgModule({
  declarations: [
    AppComponent,
    ReproductorComponent,
    FormularioRegistrarUsuarioComponent,
    NavbarComponent,
    InterfazRetosComponent
  ],
  imports: [
    BrowserModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
