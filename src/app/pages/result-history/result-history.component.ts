import { Component } from "@angular/core";
import { SurveyStoreService } from "src/app/store/survey-store.service";

@Component({
  selector: "app-result-history",
  templateUrl: "./result-history.component.html",
  styleUrls: ["./result-history.component.scss"],
})
export class ResultHistoryComponent {
  histories$ = this.surveyStore.histories$;

  constructor(private surveyStore: SurveyStoreService) {}
}
