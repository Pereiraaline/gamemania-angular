import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { HttpClientModule } from "@angular/common/http";
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PcGamersComponent } from './views/pc-gamers/pc-gamers.component';
import { JogosComponent } from './views/jogos/jogos.component';
import { NotebooksComponent } from './views/notebooks/notebooks.component';
import { CelularesComponent } from './views/celulares/celulares.component';
import { AcessoriosComponent } from './views/acessorios/acessorios.component';
import { ContatoComponent } from './views/contato/contato.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    PcGamersComponent,
    JogosComponent,
    NotebooksComponent,
    CelularesComponent,
    AcessoriosComponent,
    ContatoComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
