import { isDevMode } from "@angular/core";
import {
  Action,
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
} from "@ngrx/store";
import { SurveyHistory } from "src/app/models/survey.models";

export const SURVEY_STORE_KEY = "survey";

export interface AppState {
  [SURVEY_STORE_KEY]: SurveyState;
}

export interface SurveyState {
  currentSurvey: any;
  histories: SurveyHistory[];
}

const initialState: SurveyState = {
  currentSurvey: null,
  histories: [
    {
      id: "1",
      name: "mock survey 1",
    },
  ],
};

export const reducers: ActionReducer<SurveyState, Action> =
  createReducer(initialState);
