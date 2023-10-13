import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import * as camelCaseKeys from "camelcase-keys";
import { DataTableColumn, DataTableHeaderColumn } from "../models/survey.models";

export const APIKey = "AIzaSyDWMqMbT5QnY81sQiJPaa8c4-KysFKxjSM";
export const url = `https://generativelanguage.googleapis.com/v1beta3/models/text-bison-001:generateText?key=${APIKey}`;

@Injectable()
export class SurveyService {
  constructor(private http: HttpClient) {}

  public getSurvey(input: any): Observable<any> {
    return this.http.post(url, { prompt: { text: input } });
  }

  public importDataFromCSV(csvText: string): Array<any> {
    const propertyNames = csvText.slice(0, csvText.indexOf("\n")).split(",");
    const dataRows = csvText.slice(csvText.indexOf("\n") + 1).split("\n");

    let dataArray: any[] = [];
    dataRows.forEach((row) => {
      let values = row.split(",");

      let obj: any = new Object();

      for (let index = 0; index < propertyNames.length; index++) {
        const propertyName: string = propertyNames[index];

        let val: any = values[index];
        if (val === "") {
          val = null;
        }

        obj[propertyName] = val;
      }

      dataArray.push(camelCaseKeys(obj));
    });

    return dataArray;
  }

  public initTable(): DataTableColumn[] {
    return [
      {
        key: DataTableHeaderColumn.Id,
        title: "Id",
        width: "120px",
      },
      {
        key: DataTableHeaderColumn.Score,
        title: "Score",
        width: "120px",
      },
      {
        key: DataTableHeaderColumn.Text,
        title: "Text",
        width: "120px",
      },
      {
        key: DataTableHeaderColumn.ResponseDate,
        title: "Response Date",
        width: "200px",
      },
      {
        key: DataTableHeaderColumn.Country,
        title: "Country",
        width: "120px",
      },
      {
        key: DataTableHeaderColumn.UserRole,
        title: "UserRole",
        width: "120px",
      },
      {
        key: DataTableHeaderColumn.Organization,
        title: "Organization",
        width: "180px",
      },
      {
        key: DataTableHeaderColumn.Source,
        title: "Source",
        width: "120px",
      },
      {
        key: DataTableHeaderColumn.Plan,
        title: "Plan",
        width: "120px",
      },
      {
        key: DataTableHeaderColumn.Ecosystem,
        title: "Ecosystem",
        width: "120px",
      },
      {
        key: DataTableHeaderColumn.CoreChanel,
        title: "Core End User Age Amount",
        width: "120px",
      },
      {
        key: DataTableHeaderColumn.CoreEndUserAgeAmount,
        title: "Core Chanel",
        width: "120px",
      },
      {
        key: DataTableHeaderColumn.Theme,
        title: "Theme",
        width: "100%",
      },
    ];
  }
}
