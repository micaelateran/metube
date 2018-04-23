import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { YoutubeComponent } from './youtube/youtube.component';
import { FormularioRegistrarUsuarioComponent } from './formulario-registrar-usuario/formulario-registrar-usuario.component';
import {MiniaturasComponent} from './miniaturas/miniaturas.component';
const routes: Routes = [
    {path: 'videos', component: MiniaturasComponent},
    {path: 'logIn', component: FormularioRegistrarUsuarioComponent},
    {path: 'video', component: YoutubeComponent},

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}

