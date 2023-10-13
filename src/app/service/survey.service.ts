import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export const APIKey = 'AIzaSyDWMqMbT5QnY81sQiJPaa8c4-KysFKxjSM';
export const url = `https://generativelanguage.googleapis.com/v1beta3/models/text-bison-001:generateText?key=${APIKey}`

@Injectable()
export class SurveyService {
  constructor(private http: HttpClient) {}

  public getSurvey(input: any): Observable<any> {
    return this.http.post(url, { prompt: { text: input }});
  }

}
