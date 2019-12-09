import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgTextRComponent } from './img-text-r.component';

describe('ImgTextRComponent', () => {
  let component: ImgTextRComponent;
  let fixture: ComponentFixture<ImgTextRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgTextRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgTextRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
