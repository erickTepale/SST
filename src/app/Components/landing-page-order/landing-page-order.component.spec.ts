import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageOrderComponent } from './landing-page-order.component';

describe('LandingPageOrderComponent', () => {
  let component: LandingPageOrderComponent;
  let fixture: ComponentFixture<LandingPageOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPageOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
