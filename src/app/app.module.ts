import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {AuthService} from './services/auth.service';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { QuatreZeroQuatreComponent } from './quatre-zero-quatre/quatre-zero-quatre.component';

import { AppComponent } from './app.component';
import { PosteMiniComponent } from './poste-mini/poste-mini.component';
import { ConnexionComponent } from './auth/connexion/connexion.component';
import { InscriptionComponent } from './auth/inscription/inscription.component';
import { GallerieComponent } from './gallerie/gallerie.component';
import { MyGallerieComponent } from './my-gallerie/my-gallerie.component';
import { SearchGallerieComponent } from './search-gallerie/search-gallerie.component';

const appRoutes: Routes = [
  { path: 'connexion', component: ConnexionComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: '', component: AppComponent },
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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
