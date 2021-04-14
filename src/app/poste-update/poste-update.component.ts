import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostesService} from '../services/postes.service';
import {Poste} from '../models/poste.model';

@Component({
  selector: 'app-poste-update',
  templateUrl: './poste-update.component.html',
  styleUrls: ['./poste-update.component.css']
})
export class PosteUpdateComponent implements OnInit {

  titre = null;
  poste: any;

  constructor(private postesService: PostesService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.titre = this.route.snapshot.params.titre;
    console.log('log');
    console.log(this.titre);
    this.poste = this.postesService.getPoste(this.titre);
    console.log(this.poste);
  }

}
