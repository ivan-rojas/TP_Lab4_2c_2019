import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMozoComponent } from './main-mozo.component';

describe('MainMozoComponent', () => {
  let component: MainMozoComponent;
  let fixture: ComponentFixture<MainMozoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainMozoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMozoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
