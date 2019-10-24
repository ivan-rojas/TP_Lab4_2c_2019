import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainGeneralComponent } from './main-general.component';

describe('MainGeneralComponent', () => {
  let component: MainGeneralComponent;
  let fixture: ComponentFixture<MainGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
