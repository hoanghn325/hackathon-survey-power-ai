import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import * as camelCaseKeys from "camelcase-keys";
import { DataTableColumn, DataTableHeaderColumn } from "../models/survey.models";

export const APIKey = "AIzaSyDWMqMbT5QnY81sQiJPaa8c4-KysFKxjSM";
export const url = `https://generativelanguage.googleapis.com/v1beta3/models/text-bison-001:generateText?key=${APIKey}`;

@Injectable()
export class SurveyService {
  constructor(private http: HttpClient) {}

  endpoint: string = "";
  headers: HttpHeaders | undefined;
  prompt = ("What is the largest number with a name?");

  public createPrompt(
    prompt: string = "What is the largest number with a name?",
    temperature: number = 0.7,
    maxOutputTokens: number = 100,
    topP: number = 0.95,
    topK: number = 40
  ): any {
    const request : any = {
      "instances": [
        {
          "prompt": `${prompt}`
        }
      ],
      "parameters": {
        "temperature": temperature,
        "maxOutputTokens": maxOutputTokens,
        "topP": topP,
        "topK": topK
      }
    }
    return request;
  }

  public TestVertexAIWithoutApiKey() {
    const PROJECT_ID = 'ace-vial-402011';
    const GCLOUD_AUTH_PRINT_ACCESS_TOKEN = 'ya29.a0AfB_byAzz5kcZjJuRyncRd0ugevgHuqiGOCI6DZDU09aHfMA3TCMtPlDux45oXC_pOGz1Kn5OEK3vGPeJ_0g4ANAac9tG1pN_bqPCJeyu2zWHHwX_6_ISRPfRlbTFV4RLYCbDOwe5gUorH-5yOvbeTlEdaZ_otILdSe0aHrM5gaCgYKAXMSARASFQGOcNnCAUVIT9FlDxc1p5AFRaZa1g0177';
    
    this.buildEndpointUrl(PROJECT_ID);
    this.getAuthHeaders(GCLOUD_AUTH_PRINT_ACCESS_TOKEN);
    
    this.http.post<any>(this.endpoint, this.prompt, { headers: this.headers })
      .subscribe(response => {
        console.log(response.predictions[0].content);
      });
  }

  public getAuthHeaders(accessToken: string) {
    this.headers = new HttpHeaders()
      .set('Authorization', `Bearer ${accessToken}`);
  }

  public buildEndpointUrl(projectId: string) {
    const BASE_URL = "https://us-central1-aiplatform.googleapis.com/";
    const API_VERSION = 'v1';        // may be different at this time
    const MODEL = 'text-bison';      
  
    let url = BASE_URL;              // base url
    url += API_VERSION;              // api version
    url += "/projects/" + projectId; // project id
    url += "/locations/us-central1"; // google cloud region
    url += "/publishers/google";     // publisher
    url += "/models/" + MODEL;       // model
    url += ":predict";               // action
  
    this.endpoint = url;
  }

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
        width: "100px",
      },
      {
        key: DataTableHeaderColumn.Text,
        title: "Text",
        width: "120px",
      },
      {
        key: DataTableHeaderColumn.ResponseDate,
        title: "Response Date",
        width: "250px",
      },
      {
        key: DataTableHeaderColumn.Country,
        title: "Country",
        width: "100px",
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
        width: "250px",
        type: 'dropdown'
      },
    ];
  }
}
