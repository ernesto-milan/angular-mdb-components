import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgTextLComponent } from './img-text-l.component';

describe('ImgTextLComponent', () => {
  let component: ImgTextLComponent;
  let fixture: ComponentFixture<ImgTextLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgTextLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgTextLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
