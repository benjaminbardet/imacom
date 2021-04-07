import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Poste } from '../models/poste.model';
import { PostesService } from '../services/postes.service';
import { Router } from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-poste-create',
  templateUrl: './poste-create.component.html',
  styleUrls: ['./poste-create.component.css']
})
export class PosteCreateComponent implements OnInit {


  posteForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private postesService: PostesService,
              private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.posteForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required],
      ville: ['', Validators.required],
      pays: ['', Validators.required],
      categorie: ['', Validators.required]
    });
  }

  onSavePostes(): void {
    const title = this.posteForm.get('title').value;
    const author = this.authService.user.id;
    const description = this.posteForm.get('description').value;
    const categorie = this.posteForm.get('categorie').value;
    const ville = this.posteForm.get('ville').value;
    const pays = this.posteForm.get('pays').value;
    const image = this.posteForm.get('image').value;
    const newPoste = new Poste(title, author);
    newPoste.description = description;
    newPoste.categorie = categorie;
    newPoste.pays = pays;
    newPoste.ville = ville;
    newPoste.image = image;
    this.postesService.createNewPoste(newPoste);
    this.router.navigate(['/']);
  }

}
