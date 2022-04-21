import { Component, Input, OnInit } from '@angular/core';
import { IMAGES } from './images';


@Component({
  selector: 'app-bulletin-carousel',
  templateUrl: './bulletin-carousel.component.html',
  styleUrls: ['./bulletin-carousel.component.css']
})
export class BulletinCarouselComponent implements OnInit {

  images = IMAGES;
  index = 1;
  // this.images refers to whole array
  generateImage() {  
    let src = "";
    for (const c in this.images){
      let value = this.images[c].id
      if (this.index === value){
        src = this.images[c].image
      }  
    }
  return src;
  }
  generateLink(){
    let src = "";
    for (const c in this.images){
      let value = this.images[c].id
      if (this.index === value){
        src = this.images[c].link
      }  
    }
  return src;
  }
  generateTitle(){
    let text = "";
    for (const c in this.images){
      let value = this.images[c].id
      if (this.index === value){
        text = this.images[c].title
      }  
    }
  return text;
  }
  nextImage(){  
    this.index++
    if (this.index >= 4){
      this.index = 1
    }
  }
  prevImage(){  
    this.index--
    if (this.index <= 0){
      this.index = 3
    }
  }
  dot1(){  
    this.index = 1;
  }
  dot2(){  
    this.index = 2;
  }
  dot3(){  
    this.index = 3;
  }


  constructor() { }


  ngOnInit(): void {
  }

}
