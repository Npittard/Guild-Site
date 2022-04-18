import { Component, Input, OnInit } from '@angular/core';
import { IMAGES } from './images';

@Component({
  selector: 'app-bulletin-carousel',
  templateUrl: './bulletin-carousel.component.html',
  styleUrls: ['./bulletin-carousel.component.css']
})
export class BulletinCarouselComponent implements OnInit {

  images = IMAGES
  i = 0
  getSlide() {
    console.log(this.images[this.i])
    return this.images[this.i];

  }

  constructor() { }

  ngOnInit(): void {
  }

}
