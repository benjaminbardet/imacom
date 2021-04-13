export class Poste {
  id: number;
  image: string;
  description: string;
  categorie: string;
  ville: string;
  pays: string;
  estPublic: boolean;
  constructor(public title: string, public author: string) {
  }
}
