export class Poste {
  image: string;
  description: string;
  categorie: string;
  pays: string;
  showMaxi: boolean;
  recherche: boolean;
  constructor(public title: string) {
    this.showMaxi = false;
    this.recherche = true;
  }
}
