import {Component, Input, OnInit} from '@angular/core';
import {PosteMaxiService} from '../services/poste-maxi.service';

@Component({
  selector: 'app-poste-maxi',
  templateUrl: './poste-maxi.component.html',
  styleUrls: ['./poste-maxi.component.css']
})
export class PosteMaxiComponent implements OnInit {

  @Input() poste: any;

  constructor(private posteMaxi: PosteMaxiService) { }

  ngOnInit(): void {
  }

  likedByUser(): void {
  }

  unlikedByUser(): void {
  }

  hidden(): void {
    this.posteMaxi.visible = false;
  }

}
