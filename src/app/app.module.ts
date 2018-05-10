import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore'
import { AngularFireStorageModule } from 'angularfire2/storage'
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule} from 'angularfire2/database';

import { environment } from '../environments/environment.prod';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { ReproductorComponent } from './manejo-de-videos/reproductor/reproductor.component';
import { NavbarComponent } from './vistas/navbar/navbar.component';
import { InterfazRetosComponent } from './vistas/interfaz-retos/interfaz-retos.component';
import { DropZoneDirective } from './directivas/drop-zone.directive';

import { FileSizePipe } from './pipes/file-size.pipe';
import { LoginComponent } from './manejo-de-usuarios/login/login.component';
import { RegisterComponent } from './manejo-de-usuarios/register/register.component';
import { UsuariosComponent } from './manejo-de-usuarios/usuarios/usuarios.component';
import { HomePageComponent } from './vistas/home-page/home-page.component';
import { AuthService } from './servicios/auth.service';
import { DataService } from './servicios/data.service';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxPageScrollModule} from 'ngx-page-scroll';
import { DatabaseService } from './servicios/database.service';
import { CalificadorComponent } from './manejo-de-videos/calificador/calificador.component';
import { PerfilComponent } from './manejo-de-usuarios/perfil/perfil.component';
import { ComentariosComponent } from './vistas/comentarios/comentarios.component';
import { ListaVideosComponent } from './vistas/lista-videos/lista-videos.component';
import { InterfazSubirVideosComponent } from './vistas/interfaz-subir-videos/interfaz-subir-videos.component';
import { InterfazSubirRetosComponent } from './vistas/interfaz-subir-retos/interfaz-subir-retos.component';
import { FileUploadComponent } from './manejo-de-archivos/file-upload/file-upload.component';
import { UploadComponent } from './manejo-de-archivos/upload/upload.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    ReproductorComponent,
    NavbarComponent,
    InterfazRetosComponent,
    DropZoneDirective,
    FileUploadComponent,
    FileSizePipe,
    LoginComponent,
    RegisterComponent,
    UsuariosComponent,
    HomePageComponent,
    CalificadorComponent,
    PerfilComponent,
    ComentariosComponent,
    ListaVideosComponent,
    InterfazSubirVideosComponent,
    InterfazSubirRetosComponent,
    UploadComponent,
  ],
  imports: [
    BrowserModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    FormsModule,
    AppRoutingModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    NgxPageScrollModule,
    FlexLayoutModule,
  ],
  providers: [AuthService,DataService,DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
