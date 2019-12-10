import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'
@Component({
  selector: 'app-jumbo',
  templateUrl: './jumbo.component.html',
  styleUrls: ['./jumbo.component.scss']
})
export class JumboComponent implements OnInit {
  
  @Input() title: string;
  @Input() text: string;
  @Input() text2: string;
  @Input() srcA: string;

  constructor(private sanitization:DomSanitizer) { }

  ngOnInit() {
    //this.srcA = this.sanitization.bypassSecurityTrustStyle(this.srcA);
  }

}
