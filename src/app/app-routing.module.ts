import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcessoriosComponent } from './views/acessorios/acessorios.component';
import { CelularesComponent } from './views/celulares/celulares.component';
import { ContatoComponent } from './views/contato/contato.component';
import { HomeComponent } from './views/home/home.component';
import { JogosComponent } from './views/jogos/jogos.component';
import { LoginComponent } from './views/login/login.component';
import { NotebooksComponent } from './views/notebooks/notebooks.component';
import { PcGamersComponent } from './views/pc-gamers/pc-gamers.component';




const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "login", component:LoginComponent},
  {path: "pc-gamers", component:PcGamersComponent},
  {path: "jogos", component:JogosComponent},
  {path: "notebooks", component:NotebooksComponent},
  {path: "celulares", component: CelularesComponent},
  {path: "acessorios", component: AcessoriosComponent},
  {path: "contato", component: ContatoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
