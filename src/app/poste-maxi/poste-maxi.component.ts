import {Component, Input, OnInit} from '@angular/core';
import {PosteMaxiService} from '../services/poste-maxi.service';

@Component({
  selector: 'app-poste-maxi',
  templateUrl: './poste-maxi.component.html',
  styleUrls: ['./poste-maxi.component.css']
})
export class PosteMaxiComponent implements OnInit {

  @Input() poste = {
    title: 'Title',
    category: 'Catégorie',
    imgURL: 'https://picsum.photos/1920/1080/',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  };

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
