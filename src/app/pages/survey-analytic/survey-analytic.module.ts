import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SurveyAnalyticRoutingModule } from './survey-analytic-routing.module';
import { SurveyAnalyticPageComponent } from './survey-analytic-page.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [
    SurveyAnalyticPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NzButtonModule,
    NzSpinModule,
    NzInputModule,
    ReactiveFormsModule,
    NzTableModule,
    NzSelectModule,
    NzIconModule,
    NzNotificationModule,
    SurveyAnalyticRoutingModule
  ]
})
export class SurveyAnalyticModule { }
