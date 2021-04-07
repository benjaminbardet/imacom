import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-gallerie',
  templateUrl: './search-gallerie.component.html',
  styleUrls: ['./search-gallerie.component.css']
})
export class SearchGallerieComponent implements OnInit {

  constructor() { }

  @Input() searchLabel: string;

  ngOnInit(): void {
  }

}
