import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-img-text-r',
  templateUrl: './img-text-r.component.html',
  styleUrls: ['./img-text-r.component.scss']
})
export class ImgTextRComponent implements OnInit {
  @Input() srcA: string;

  constructor() { }

  ngOnInit() {
  }

}
