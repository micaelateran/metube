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

import { AngularFireModule } from 'angularfire2';
//import { AngularFirestoreModule } from 'angularfire2/firestore'
import { AngularFireStorageModule } from 'angularfire2/storage'

import { environment } from '../environments/environment';
import { DropZoneDirective } from './drop-zone.directive';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FileSizePipe } from './file-size.pipe'

@NgModule({
  declarations: [
    AppComponent,
    ReproductorComponent,
    FormularioRegistrarUsuarioComponent,
    NavbarComponent,
    InterfazRetosComponent,
    DropZoneDirective,
    FileUploadComponent,
    FileSizePipe
  ],
  imports: [
    BrowserModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
