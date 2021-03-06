import { Component, Input, OnInit } from '@angular/core';
import { Poste } from '../models/poste.model';


//import {Poste} from '../models/poste.model';
//import {PostesService} from '../services/postes.service';
import {PostesService} from '../services/postes.service';
import {Router} from '@angular/router';
import {query} from '@angular/animations';

@Component({
  selector: 'app-poste-mini',
  templateUrl: './poste-mini.component.html',
  styleUrls: ['./poste-mini.component.css']
})
export class PosteMiniComponent {


  isPublisherAuthentified = true;
  isLikedByAuthentifiedUser = false;

  visibleMaxi = false;

  @Input() poste: any;
  @Input() isMyGallerie = false;

  constructor(private postesService: PostesService, private router: Router) {
  }

  setIsPublisherAuthentified(): void{
    // verify if author of the current post is the authentified user
  }

  likedByUser(): void {
    // does everything to make the system know that authentified user has liked  the post
    this.isLikedByAuthentifiedUser = true;
  }
  unlikedByUser(): void {
    // does everything to make the system know that authentified user has unliked the post
    this.isLikedByAuthentifiedUser = false;
  }

  show(): void {
    this.poste.posteMaxi = true;
  }

  onDelete(): void {
    console.log('to delete : '+ this.poste.id);
    this.postesService.deletePost(this.poste);
  }

  onUpdatePoste(): void {
    console.log('bonjour');
    const titre = this.poste.title;
    console.log(this.poste.title);
    this.router.navigate(['/poster/update', titre]);
  }

}
