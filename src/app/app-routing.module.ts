import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { MotDePasseComponent } from './mot-de-passe/mot-de-passe.component';
import { MonForumComponent } from './mon-forum/mon-forum.component';


const routes: Routes = [
  { path: '', redirectTo: 'acceuil', pathMatch: 'full' }, //!!!!!
  { path: 'acceuil', component: FirstComponentComponent },
  { path: 'acceuil/forum', component: SecondComponentComponent },
  {path:'acceuil/MotDePasse',component:MotDePasseComponent},
  {path:'acceuil/Forum/USER',component:MonForumComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
