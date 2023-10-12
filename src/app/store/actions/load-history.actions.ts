import { createAction, props } from "@ngrx/store";

export const surveyLoadHistory = createAction(
  "[LoadHistory] Survey Load History"
);

export const surveyLoadHistorySuccess = createAction(
  "[LoadHistory] Survey LoadH istorys Success",
  props<{ data: any }>()
);

export const surveyLoadHistoryFailure = createAction(
  "[LoadHistory] Survey Load History Failure",
  props<{ error: any }>()
);
