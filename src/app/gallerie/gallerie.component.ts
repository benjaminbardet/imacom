import {Component, Input, OnDestroy, OnInit} from '@angular/core';
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

  @Input() isMyGallerie = false;
  galleryContent: Poste[];
  booksSubscription: Subscription;
  booksSubscriptionUser: Subscription;

  constructor(private postesService: PostesService, private router: Router) {}

  ngOnInit(): void{
    if (this.isMyGallerie) {
      this.booksSubscriptionUser = this.postesService.PostesSubjectUser.subscribe(
        (postes: Poste[]) => {
          this.galleryContent = postes;
        }
      );
      this.postesService.emitPostesUser();
    } else {
      this.booksSubscription = this.postesService.PostesSubject.subscribe(
        (postes: Poste[]) => {
          this.galleryContent = postes;
        }
      );
      this.postesService.emitPostes();
    }
  }

  onDeleteBook(poste: Poste): void {
    this.postesService.removePostes(poste);
  }

  ngOnDestroy(): void {
    this.booksSubscription.unsubscribe();
  }
}
