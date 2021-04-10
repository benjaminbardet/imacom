export class Poste {
  image: string;
  description: string;
  categorie: string;
  ville: string;
  pays: string;
  estPublic: boolean;
  showMaxi: boolean;
  constructor(public title: string, public author: string) {
    this.showMaxi = false;
  }
}
