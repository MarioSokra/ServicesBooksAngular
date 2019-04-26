import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { InfantilComponent } from './pages/infantil/infantil.component';
import { TerrorComponent } from './pages/terror/terror.component';
import { NuevoLibroComponent } from './pages/nuevo-libro/nuevo-libro.component';
import { FormsModule } from '@angular/forms';
import { ContactarComponent } from './pages/contactar/contactar.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    InfantilComponent,
    TerrorComponent,
    NuevoLibroComponent,
    ContactarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
