import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultHistoryComponent } from './result-history.component';

const routes: Routes = [{ path: '', component: ResultHistoryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultHistoryRoutingModule { }
