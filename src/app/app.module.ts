import { NgModule, isDevMode } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NZ_I18N } from "ng-zorro-antd/i18n";
import { en_US } from "ng-zorro-antd/i18n";
import { registerLocaleData } from "@angular/common";
import en from "@angular/common/locales/en";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { IconsProviderModule } from "./icons-provider.module";
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { NzMenuModule } from "ng-zorro-antd/menu";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { AppEffects } from "./store/app.effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { SURVEY_STORE_KEY, reducers } from "./store/reducers";
import { NzButtonModule } from "ng-zorro-antd/button";
import { SurveyService } from "./service/survey.service";
import { NzSpinModule } from "ng-zorro-antd/spin";
import { SurveyAnalyticModule } from "./pages/survey-analytic/survey-analytic.module";
import { NzInputModule } from "ng-zorro-antd/input";

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzButtonModule,
    NzSpinModule,
    NzInputModule,
    EffectsModule.forRoot([AppEffects]),
    StoreModule.forRoot({ [SURVEY_STORE_KEY]: reducers }),
    SurveyAnalyticModule,
    // isDevMode() ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, SurveyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
