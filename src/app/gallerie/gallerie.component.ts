import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallerie',
  templateUrl: './gallerie.component.html',
  styleUrls: ['./gallerie.component.css']
})
export class GallerieComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  galleryContent = [
    {
      cardId: 0,
      title: 'Lac between mounstains chain',
      description: 'Here is a pictur I took last year during my trip to High Sierra.',
      image: "https://picsum.photos/1920/1080/"
    },
    {
      cardId: 1,
      title: 'Lac between mounstains chain',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis id ligula eget gravida. Vivamus nec ultricies libero. Pellentesque maximus dolor nulla, a suscipit elit malesuada nec. Curabitur a sollicitudin lorem, eu placerat mauris. Aliquam erat volutpat. Sed placerat rhoncus quam, eu dapibus nulla consectetur id. Maecenas pulvinar condimentum viverra. In tempor maximus viverra. In elementum nec augue pellentesque congue. In sit amet nunc eget velit auctor porta.',
      image: "https://picsum.photos/1920/1080/"
    },
    {
      cardId: 2,
      title: 'Lac between mounstains chain',
      description: 'Here is a pictur I took last year during my trip to High Sierra.',
      image: "https://picsum.photos/1920/1080/"
    },
    {
      cardId: 3,
      title: 'Lac between mounstains chain',
      description: 'Here is a pictur I took last year during my trip to High Sierra.',
      image: "https://picsum.photos/1920/1080/"
    },
    {
      cardId: 4,
      title: 'Lac between mounstains chain',
      description: 'Here is a pictur I took last year during my trip to High Sierra.',
      image: "https://picsum.photos/1920/1080/"
    }
  ];
}
