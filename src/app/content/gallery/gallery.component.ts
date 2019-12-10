import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  array = [
    {
      name: '../../assets/front.jpg',
    },
    {
      name: '../../assets/c1.jpeg',
    },
    {
      name: '../../assets/o1.jpeg',
    },
  ]
 
  constructor() { }

  ngOnInit() {
  }

}
