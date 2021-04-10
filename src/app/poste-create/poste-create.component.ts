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
  fileIsUploading = false;
  fileUrl: string;
  fileUploaded = false;

  constructor(private formBuilder: FormBuilder, private postesService: PostesService,
              private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.posteForm = this.formBuilder.group({
      titre: ['', Validators.required],
      description: ['', Validators.required],
      image: '',
      ville: ['', Validators.required],
      pays: ['', Validators.required],
      categorie: ['', Validators.required],
      estPublic: ''

    });
  }

  onSavePostes(): void {
    const title = this.posteForm.get('titre').value;
    const author = localStorage.getItem('token');
    const description = this.posteForm.get('description').value;
    const categorie = this.posteForm.get('categorie').value;
    const ville = this.posteForm.get('ville').value;
    const pays = this.posteForm.get('pays').value;
    const image = this.posteForm.get('image').value;
    console.log(this.posteForm.get('estPublic').value);
    const newPoste = new Poste(title, author);
    newPoste.description = description;
    newPoste.categorie = categorie;
    newPoste.pays = pays;
    newPoste.ville = ville;
    if (this.posteForm.get('estPublic').value === 'true'){
      newPoste.estPublic = true;
    }else{
      newPoste.estPublic = false;
    }
    if (this.fileUrl && this.fileUrl !== '') {
      newPoste.image = this.fileUrl;
    }
    this.postesService.createNewPoste(newPoste);
    this.router.navigate(['/']);
  }

  onUploadFile(file: File): void {
    this.fileIsUploading = true;
    this.postesService.uploadFile(file).then(
      (url: string) => {
        this.fileUrl = url;
        this.fileIsUploading = false;
        this.fileUploaded = true;
      }
    );
  }

  detectFiles(event): void {
    this.onUploadFile(event.target.files[0]);
  }

}
