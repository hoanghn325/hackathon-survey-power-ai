import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyAnalyticPageComponent } from './survey-analytic-page.component';

describe('SurveyAnalyticPageComponent', () => {
  let component: SurveyAnalyticPageComponent;
  let fixture: ComponentFixture<SurveyAnalyticPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyAnalyticPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveyAnalyticPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
