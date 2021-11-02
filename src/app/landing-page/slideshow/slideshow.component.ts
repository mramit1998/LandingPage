import { Component, OnInit } from '@angular/core';


export interface Image {
  imagePath: any;
  alt: string;
}

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})

export class SlideshowComponent implements OnInit {

  color: string[] = ['#EEEBDD', '#D8B6A4', '#630000']
  images: Image[] = [
    {
      imagePath: 'assets/images/img1.png',
      alt: 'Cubicles'
    },
    {
      imagePath: 'assets/img2.png',
      alt: 'Bisht'
    }
  ]
  index:number = 0;

  currentImg: Image;
  
  currentColor: string;
  
  constructor() {

  }

  ngOnInit(): void {
    this.currentImg = this.images[this.index];
    this.currentColor = this.color[this.index];
  }

  plusSlides(num:number){
    if(num ===-1){
      if(this.index ==0){
        this.index = this.color.length -1;
      }else{
        this.index--;
      }
    }else{
      if(this.index === this.color.length -1){
        this.index =0;
      }else{
        this.index++;
      }
    }
    this.currentColor = this.color[this.index];
  }
}
