import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-carousel',
  templateUrl: './landing-carousel.component.html',
  styleUrls: ['./landing-carousel.component.scss']
})
export class LandingCarouselComponent implements OnInit {

  images: any[] = [
    "../../assets/landing-carousal/1.jpg",
    "../../assets/landing-carousal/2.jpg",
    "../../assets/landing-carousal/3.jpg",
    "../../assets/landing-carousal/4.jpg",
  ];

  interval: number = 2000;

  constructor() { }

  ngOnInit() {
  }

}
