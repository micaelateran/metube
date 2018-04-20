import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { YoutubePlayerModule } from 'ng2-youtube-player';
import { YoutubeComponent } from './youtube/youtube.component';
import { FormularioRegistrarUsuarioComponent } from './formulario-registrar-usuario/formulario-registrar-usuario.component';


@NgModule({
  declarations: [
    AppComponent,
    YoutubeComponent,
    FormularioRegistrarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    YoutubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
