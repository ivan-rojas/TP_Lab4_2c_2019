import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSocioComponent } from './main-socio.component';

describe('MainSocioComponent', () => {
  let component: MainSocioComponent;
  let fixture: ComponentFixture<MainSocioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainSocioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
