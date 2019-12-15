import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  array = [
    {
      name: 'https://images.fineartamerica.com/images-medium-large-5/dark-rose-sq-rick-monyahan.jpg',
    },
    {
      name: 'https://images.fineartamerica.com/images-medium-large-5/dark-rose-sq-rick-monyahan.jpg',
    },
    {
      name: 'https://images.fineartamerica.com/images-medium-large-5/dark-rose-sq-rick-monyahan.jpg',
    },
  ]
 
  constructor() { }

  ngOnInit() {
  }

}
