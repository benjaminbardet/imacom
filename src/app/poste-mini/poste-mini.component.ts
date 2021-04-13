import { Component, Input, OnInit } from '@angular/core';
import {Poste} from '../models/poste.model';
import {PostesService} from '../services/postes.service';

@Component({
  selector: 'app-poste-mini',
  templateUrl: './poste-mini.component.html',
  styleUrls: ['./poste-mini.component.css']
})
export class PosteMiniComponent {


  isPublisherAuthentified = true;
  isLikedByAuthentifiedUser = false;
  @Input() posteId:number = 0;
  @Input() description:string= "";
  @Input() title:string = "";
  @Input() image:string = "";
 
  setIsPublisherAuthentified(): void{
    // verify if author of the current post is the authentified user
  }

  likedByUser (): void {
    // does everything to make the system know that authentified user has liked  the post
    this.isLikedByAuthentifiedUser = true;
  }
  unlikedByUser(): void {
    // does everything to make the system know that authentified user has unliked the post
    this.isLikedByAuthentifiedUser = false;
  }

  onDeletePoste(posteId: number): void {
    //delete the post
  }

}
