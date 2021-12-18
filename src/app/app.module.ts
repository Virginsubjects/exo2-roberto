import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ListComponent } from './list/list.component';
import { GestionComponent } from './gestion/gestion.component';
import { FormComponent } from './footer/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VariablesGlobales } from './globals';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AccueilComponent,
    ListComponent,
    GestionComponent,
    FormComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [VariablesGlobales],
  bootstrap: [AppComponent]
})
export class AppModule { }
