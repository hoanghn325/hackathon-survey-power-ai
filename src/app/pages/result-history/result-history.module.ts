import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultHistoryRoutingModule } from './result-history-routing.module';
import { ResultHistoryComponent } from './result-history.component';


@NgModule({
  declarations: [
    ResultHistoryComponent
  ],
  imports: [
    CommonModule,
    ResultHistoryRoutingModule
  ]
})
export class ResultHistoryModule { }
