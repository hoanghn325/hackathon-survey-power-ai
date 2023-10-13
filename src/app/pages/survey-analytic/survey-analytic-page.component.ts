import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { debounceTime, distinctUntilChanged, take } from "rxjs";
import {
  DataTableColumn,
  DataTableHeaderColumn,
  SurveyTableData,
} from "src/app/models/survey.models";
import { SurveyService } from "src/app/service/survey.service";

@Component({
  selector: "app-survey-analytic-page",
  templateUrl: "./survey-analytic-page.component.html",
  styleUrls: ["./survey-analytic-page.component.scss"],
})
export class SurveyAnalyticPageComponent implements OnInit {
  @ViewChild("csvImport")
  private csvImport: any;

  public result: any;

  public isLoading: boolean = false;

  public isLoadingTable: boolean = false;

  public importedData: Array<SurveyTableData> = [];

  public form: FormGroup;

  public columns: DataTableColumn[] = [];

  public get questionFormControl(): FormControl {
    return this.form.get("question") as FormControl;
  }

  constructor(
    private surveyService: SurveyService,
    private cdr: ChangeDetectorRef
  ) {
    this.form = new FormGroup({
      question: new FormControl(null),
    });
  }

  public showSurvey() {
    this.isLoading = true;
    this.surveyService.getSurvey("checking").subscribe((response: any) => {
      this.result = response.candidates[0].output;
      this.isLoading = false;
      this.cdr.detectChanges();
    });
  }

  public ngOnInit(): void {
    this.columns = this.surveyService.initTable();
    this.questionChange();
  }

  public questionChange(): void {
    this.questionFormControl.valueChanges
      .pipe(distinctUntilChanged(), debounceTime(1500), take(1))
      .subscribe((data) => {
        this.isLoading = true;
        if (data) {
          this.surveyService.getSurvey(data).subscribe((response: any) => {
            this.result = response.candidates[0].output;
            this.isLoading = false;
            this.cdr.detectChanges();
          });
        }
      });
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
    this.isLoadingTable = true;
    let fileContent = await this.getTextFromFile(event);
    this.importedData = this.surveyService.importDataFromCSV(fileContent);
    setTimeout(() => {
      // Trick to show spinner, not affect the logic
      this.isLoadingTable = false;
      this.cdr.markForCheck();
    }, 500);
  }
}
