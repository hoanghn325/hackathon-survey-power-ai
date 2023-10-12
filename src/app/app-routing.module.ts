import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/survey" },
  {
    path: "survey",
    loadChildren: () =>
      import("./pages/survey-analytic/survey-analytic-routing.module").then(
        (m) => m.SurveyAnalyticRoutingModule
      ),
  },
  {
    path: "history",
    loadChildren: () =>
      import("./pages/result-history/result-history.module").then(
        (m) => m.ResultHistoryModule
      ),
  },
  {
    path: "settings",
    loadChildren: () =>
      import("./pages/settings/settings.module").then((m) => m.SettingsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
