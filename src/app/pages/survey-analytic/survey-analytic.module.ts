import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SurveyAnalyticRoutingModule } from './survey-analytic-routing.module';
import { SurveyAnalyticPageComponent } from './survey-analytic-page.component';


@NgModule({
  declarations: [
    SurveyAnalyticPageComponent
  ],
  imports: [
    CommonModule,
    SurveyAnalyticRoutingModule
  ]
})
export class SurveyAnalyticModule { }
