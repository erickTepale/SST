import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageContactComponent } from './landing-page-contact.component';

describe('LandingPageContactComponent', () => {
  let component: LandingPageContactComponent;
  let fixture: ComponentFixture<LandingPageContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPageContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
