import { ChangeDetectorRef, Component, OnInit, ViewChild } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { DataTableColumn, SurveyTableData } from "src/app/models/survey.models";
import { NzNotificationService } from "ng-zorro-antd/notification";
import { SurveyService } from "src/app/service/survey.service";

@Component({
  selector: "app-survey-analytic-page",
  templateUrl: "./survey-analytic-page.component.html",
  styleUrls: ["./survey-analytic-page.component.scss"],
})
export class SurveyAnalyticPageComponent implements OnInit {
  @ViewChild("csvImport")
  private csvImport: any;

  public showResult: boolean = false;

  public comment: string = "";

  public isLoadingProcess: boolean = false;

  public showTable: boolean = false;

  public isLoadingTable: boolean = false;

  public importedData: Array<SurveyTableData> = [];

  public form: FormGroup;

  public columns: DataTableColumn[] = [];

  public showProcessBtn: boolean = false;

  public showFirstAnswer: boolean = false;

  public showSecondAnswer: boolean = false;

  public themeOptions = [
    {
      id: "performanceIssue",
      text: "Performance issues",
    },
    {
      id: "ui-ux",
      text: "UI/UX",
    },
    {
      id: "featureFeedback",
      text: "Feature Feedback",
    },
    {
      id: "general",
      text: "General",
    },
  ];

  constructor(
    private surveyService: SurveyService,
    private cdr: ChangeDetectorRef,
    private nzNotificationService: NzNotificationService
  ) {
    this.form = new FormGroup({
      question: new FormControl(null),
    });
  }

  public themChanged(option: string, theme: string | undefined): void {
    theme = option;
  }

  public async showSurvey() {
    this.isLoadingProcess = true;
    setTimeout(() => {
      this.showTable = true;
      this.isLoadingProcess = false;
      this.cdr.markForCheck();
    }, 1000);
  }

  public ngOnInit(): void {
    this.columns = this.surveyService.initTable();
  }

  public mappingTheme(event?: any): void {
    this.isLoadingTable = true;
    setTimeout(() => {
      this.showResult = true;
      if (this.comment.includes("categorize")) {
        this.showFirstAnswer = true;
      } else if (this.comment.includes("lowest score")) {
        this.showFirstAnswer = false;
        this.showSecondAnswer = true;
      }
      this.importedData.forEach((data) => {
        const score = Number(data.score);
        if (score < 3) {
          data.theme = this.themeOptions[0].id;
        } else if (score >= 3 && score <= 5) {
          data.theme = this.themeOptions[1].id;
        } else if (score > 5 && score < 8) {
          data.theme = this.themeOptions[2].id;
        } else {
          data.theme = this.themeOptions[3].id;
        }
        this.cdr.detectChanges();
      });
      this.nzNotificationService.create(
        "success",
        "Notification",
        "Update data successfully"
      );
      this.isLoadingTable = false;
      this.cdr.markForCheck();
    }, 1000);
    event.stopPropagation();
  }

  public showProductFileUpload(): void {
    this.csvImport.nativeElement.click();
  }

  private async getTextFromFile(event: any) {
    const file = event.target.files[0];
    let fileContent = await file.text();
    return fileContent;
  }

  public async handleImportCSV(event: any) {
    let fileContent = await this.getTextFromFile(event);
    this.importedData = this.surveyService.importDataFromCSV(fileContent);
    this.nzNotificationService.create(
      "success",
      "Notification",
      "Your file is imported successfully"
    );
    this.showProcessBtn = true;
  }
}
