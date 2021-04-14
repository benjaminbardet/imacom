import {Component, Input, OnInit} from '@angular/core';
import {PostesService} from '../services/postes.service';

@Component({
  selector: 'app-poste-maxi',
  templateUrl: './poste-maxi.component.html',
  styleUrls: ['./poste-maxi.component.css']
})
export class PosteMaxiComponent implements OnInit {

  @Input() poste: any;
  @Input() isMyGallerie = false;
  isLikedByAuthentifiedUser = false;

  constructor(private postesService: PostesService) { }

  ngOnInit(): void {
  }

  likedByUser(): void {
    // does everything to make the system know that authentified user has liked  the post
    this.isLikedByAuthentifiedUser = true;
  }
  unlikedByUser(): void {
    // does everything to make the system know that authentified user has unliked the post
    this.isLikedByAuthentifiedUser = false;
  }

  hidden(): void {
    this.poste.posteMaxi = false;
  }

  onDelete(): void {
    console.log('to delete : '+ this.poste.id);
    this.postesService.deletePost(this.poste);
  }


}
