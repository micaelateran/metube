import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';

import { AppComponent } from './app.component';
import { ReproductorComponent } from './reproductor/reproductor.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InterfazRetosComponent } from './interfaz-retos/interfaz-retos.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore'
import { AngularFireStorageModule } from 'angularfire2/storage'
import {AngularFireAuthModule} from 'angularfire2/auth';
import { AngularFireDatabaseModule} from 'angularfire2/database';



import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { environment } from '../environments/environment';
import { DropZoneDirective } from './drop-zone.directive';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FileSizePipe } from './file-size.pipe';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth.service';
import {FormsModule} from '@angular/forms';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AlertModule } from 'ngx-bootstrap';
import { DataService } from './data.service';



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
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,

  ],
  providers: [AuthService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
