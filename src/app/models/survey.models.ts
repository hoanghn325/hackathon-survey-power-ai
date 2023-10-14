export interface SurveyHistory {
  id: string;
  name: string;
}

export interface SurveyTableData {
  coreChannel: string;
  coreEndUserAgeAmount: string;
  country: string;
  ecosystem: string;
  id: string;
  organization: string;
  plan: string;
  responseDate: string;
  score: string;
  source: string;
  text: string;
  userRole: string;
  theme?: string;
}

export interface DataTableColumn {
  key: string;
  title: string;
  width: string;
  type?: string;
}


export const enum DataTableHeaderColumn {
  CoreChanel = 'coreChannel',
  CoreEndUserAgeAmount = 'coreEndUserAgeAmount',
  Country = 'country',
  Ecosystem = 'ecosystem',
  Id = 'id',
  Organization = 'organization',
  Plan = 'plan',
  ResponseDate = 'responseDate',
  Score = 'score',
  Source = 'source',
  Text = 'text',
  UserRole = 'userRole',
  Theme = 'theme'
}