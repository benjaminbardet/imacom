import { Component, Input, OnInit } from '@angular/core';
import {PostesService} from '../services/postes.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-search-gallerie',
  templateUrl: './search-gallerie.component.html',
  styleUrls: ['./search-gallerie.component.css']
})
export class SearchGallerieComponent implements OnInit {

  constructor(private postesService: PostesService, private formBuilder: FormBuilder) { }

  @Input() searchLabel: string;
  rechercheForm: FormGroup;

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.rechercheForm = this.formBuilder.group({
      recherche: ''
    });
  }

  onRecherche(): void {
    const recherche = this.rechercheForm.get('recherche').value;
    this.searchLabel = recherche;
    console.log(this.searchLabel);
    this.postesService.recherche(recherche);
  }

  premiereRechecher(): void{
    const recherche = '';
    this.postesService.recherche(recherche);
  }

}
