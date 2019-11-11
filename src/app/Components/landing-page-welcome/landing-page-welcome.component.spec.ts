import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageWelcomeComponent } from './landing-page-welcome.component';

describe('LandingPageWelcomeComponent', () => {
  let component: LandingPageWelcomeComponent;
  let fixture: ComponentFixture<LandingPageWelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPageWelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
