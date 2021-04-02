import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {AuthService} from './services/auth.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { QuatreZeroQuatreComponent } from './quatre-zero-quatre/quatre-zero-quatre.component';

import { AppComponent } from './app.component';
import { PosteMiniComponent } from './poste-mini/poste-mini.component';
import { ConnexionComponent } from './auth/connexion/connexion.component';
import { InscriptionComponent } from './auth/inscription/inscription.component';
import { AccueilComponent } from './accueil/accueil.component';

const appRoutes: Routes = [
  { path: 'connexion', component: ConnexionComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: '', component: AccueilComponent },
  { path: 'not-found', component: QuatreZeroQuatreComponent },
  { path: '**', redirectTo: 'not-found' },
  { path: 'posteMini', component: PosteMiniComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PosteMiniComponent,
    ConnexionComponent,
    InscriptionComponent,
    QuatreZeroQuatreComponent,
    AccueilComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    IvyCarouselModule
  ],
  providers: [
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
