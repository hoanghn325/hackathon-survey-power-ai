import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SurveyAnalyticPageComponent } from "./survey-analytic-page.component";

const routes: Routes = [{ path: "", component: SurveyAnalyticPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SurveyAnalyticRoutingModule {}
