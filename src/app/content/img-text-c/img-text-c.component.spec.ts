import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgTextCComponent } from './img-text-c.component';

describe('ImgTextCComponent', () => {
  let component: ImgTextCComponent;
  let fixture: ComponentFixture<ImgTextCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgTextCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgTextCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
