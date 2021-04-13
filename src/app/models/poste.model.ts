export class Poste {
  id: number;
  image: string;
  description: string;
  categorie: string;
  ville: string;
  pays: string;
  estPublic: boolean;
  showMaxi: boolean;
  recherche: boolean;
  constructor(public title: string, public author: string) {
    this.showMaxi = false;
    this.recherche = true;
  }
}
