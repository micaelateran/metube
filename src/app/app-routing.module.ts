import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ReproductorComponent } from './reproductor/reproductor.component';
import { Component } from '@angular/core';



const routes: Routes = [
    {path: '',component:HomePageComponent},
    {path: 'login',component:LoginComponent},
    {path: 'register',component:RegisterComponent},
    {path: 'users',component:UsuariosComponent},
    {path: 'watch',component:ReproductorComponent},


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}


