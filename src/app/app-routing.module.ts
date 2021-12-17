import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ListComponent } from './list/list.component';
import { GestionComponent } from './gestion/gestion.component';
import { FormComponent } from './footer/form/form.component';

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'list', component: ListComponent },
  { path: 'gestion', component: GestionComponent },
  {path: 'formulaire', component: FormComponent},
  { path: '**', component: AccueilComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
