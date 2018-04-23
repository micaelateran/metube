import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { YoutubePlayerModule } from 'ng2-youtube-player';
import { YoutubeComponent } from './youtube/youtube.component';
import { FormularioRegistrarUsuarioComponent } from './formulario-registrar-usuario/formulario-registrar-usuario.component';
import {MiniaturasComponent} from './miniaturas/miniaturas.component';
import {AppRoutingModule} from './app-routing.module';
import {DataService} from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    YoutubeComponent,
    FormularioRegistrarUsuarioComponent,
    MiniaturasComponent
    
  ],
  imports: [
    BrowserModule,
    YoutubePlayerModule,
    AppRoutingModule,
    
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }