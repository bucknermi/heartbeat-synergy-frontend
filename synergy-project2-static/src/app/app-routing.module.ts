
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './user-home-page/user-home-page.component';
import { GenresComponent} from './genres/genres.component';

import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path: '', component:LoginPageComponent, pathMatch: 'full'},

  {path: 'home-page', component: HomePageComponent, pathMatch: 'full'},

  {path: 'registration', component: RegistrationComponent, pathMatch: 'full'},

 {path: 'genres', component: GenresComponent, pathMatch: 'full'}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) 

export class AppRoutingModule {
 
}


export const routingComponents = [HomePageComponent, LoginPageComponent, RegistrationComponent]

