import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-img-text-l',
  templateUrl: './img-text-l.component.html',
  styleUrls: ['./img-text-l.component.scss']
})
export class ImgTextLComponent implements OnInit {
  @Input() srcA: string;
  constructor() { }

  ngOnInit() {
  }

}
