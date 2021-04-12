import {Component, OnDestroy, OnInit} from '@angular/core';
import {Poste} from '../models/poste.model';
import {Subscription} from 'rxjs';
import {PostesService} from '../services/postes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-gallerie',
  templateUrl: './gallerie.component.html',
  styleUrls: ['./gallerie.component.css']
})
export class GallerieComponent implements OnInit, OnDestroy{

  galleryContent: Poste[];
  booksSubscription: Subscription;

  constructor(private postesService: PostesService, private router: Router) {}

  ngOnInit(): void{
    this.booksSubscription = this.postesService.PostesSubject.subscribe(
      (Postes: Poste[]) => {
        this.galleryContent = Postes;
      }
    );
    this.postesService.emitPostes();
    console.log('debug');
    console.log(this.galleryContent);
    console.log(this.postesService.getPostes());
    console.log(this.postesService.PostesSubject);

  }

  onDeleteBook(poste: Poste): void {
    this.postesService.removePostes(poste);
  }

  ngOnDestroy(): void {
    this.booksSubscription.unsubscribe();
  }
}
