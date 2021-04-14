import {Component, Input, OnInit} from '@angular/core';
import {PosteMaxiService} from '../services/poste-maxi.service';

@Component({
  selector: 'app-poste-maxi',
  templateUrl: './poste-maxi.component.html',
  styleUrls: ['./poste-maxi.component.css']
})
export class PosteMaxiComponent implements OnInit {

  @Input() poste: any;
  @Input() isMyGallerie = false;
  isLikedByAuthentifiedUser = false;
  constructor(private posteMaxi: PosteMaxiService) { }

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


}
