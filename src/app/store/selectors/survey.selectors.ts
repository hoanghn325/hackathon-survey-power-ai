import { Selector, createFeatureSelector, createSelector } from "@ngrx/store";
import { SurveyHistory } from "src/app/models/survey.models";
import { AppState, SURVEY_STORE_KEY, SurveyState } from "../reducers";

export const selectSurveyState =
  createFeatureSelector<SurveyState>(SURVEY_STORE_KEY);

export const selectSurveyHistory = createSelector(
  selectSurveyState,
  (state: SurveyState): SurveyHistory[] => state.histories
);
