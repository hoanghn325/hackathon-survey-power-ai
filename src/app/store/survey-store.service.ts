import { Injectable } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { SurveyHistory } from "../models/survey.models";
import { selectSurveyHistory } from "./selectors/survey.selectors";

@Injectable({
  providedIn: "root",
})
export class SurveyStoreService {
  public get histories$(): Observable<SurveyHistory[]> {
    return this.store.select(selectSurveyHistory);
  }
  constructor(private store: Store) {}
}
