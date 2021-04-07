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
import { GallerieComponent } from './gallerie/gallerie.component';
import { MyGallerieComponent } from './my-gallerie/my-gallerie.component';
import { SearchGallerieComponent } from './search-gallerie/search-gallerie.component';
import { AccueilComponent } from './accueil/accueil.component';
import {AuthGuardService} from './services/auth-guard.service';
import { PosteCreateComponent } from './poste-create/poste-create.component';
import {PostesService} from './services/postes.service';

const appRoutes: Routes = [
  { path: 'connexion', component: ConnexionComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'poster', canActivate: [AuthGuardService], component: PosteCreateComponent},
  { path: '', canActivate: [AuthGuardService], component: AccueilComponent },
  { path: 'magallerie', canActivate: [AuthGuardService], component: MyGallerieComponent },
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
    GallerieComponent,
    MyGallerieComponent,
    SearchGallerieComponent,
    AccueilComponent,
    PosteCreateComponent,
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
    AuthGuardService,
    PostesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
