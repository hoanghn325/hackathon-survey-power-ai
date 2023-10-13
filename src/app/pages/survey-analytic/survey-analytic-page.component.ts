import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { debounceTime, distinctUntilChanged, take } from "rxjs";
import { SurveyService } from "src/app/service/survey.service";

@Component({
  selector: "app-survey-analytic-page",
  templateUrl: "./survey-analytic-page.component.html",
  styleUrls: ["./survey-analytic-page.component.scss"],
})
export class SurveyAnalyticPageComponent implements OnInit {
  public string =
    'Please help analyze and give details comments for this data based on the score and text and show what is  the highest source and ecosystem based on it "{score:10,text:"Great",responseDate:"2023-09-3015:42:35+0700",country:"BD",userRole:"Inspector",organization:"316603_Tendam",source:"Android",plan:"Enterprise",ecosystem:"Tendam",coreChannel:"mobile:android",},{score:10,text:"Great",responseDate:"2023-09-3015:42:35+0700",country:"BD",userRole:"Inspector",organization:"316603_Tendam",source:"Android",plan:"Enterprise",ecosystem:"Tendam",coreChannel:"mobile:android",},{score:10,text:"Great",responseDate:"2023-09-3015:42:35+0700",country:"BD",userRole:"Inspector",organization:"316603_Tendam",source:"Android",plan:"Enterprise",ecosystem:"Tendam",coreChannel:"mobile:android",},{score:10,text:"Great",responseDate:"2023-09-3015:42:35+0700",country:"BD",userRole:"Inspector",organization:"316603_Tendam",source:"Android",plan:"Enterprise",ecosystem:"Tendam",coreChannel:"mobile:android",},{score:10,text:"Great",responseDate:"2023-09-3015:42:35+0700",country:"BD",userRole:"Inspector",organization:"316603_Tendam",source:"Android",plan:"Enterprise",ecosystem:"Tendam",coreChannel:"mobile:android",},{score:10,text:"Great",responseDate:"2023-09-3015:42:35+0700",country:"BD",userRole:"Inspector",organization:"316603_Tendam",source:"Android",plan:"Enterprise",ecosystem:"Tendam",coreChannel:"mobile:android",},{score:10,text:"Great",responseDate:"2023-09-3015:42:35+0700",country:"BD",userRole:"Inspector",organization:"316603_Tendam",source:"Android",plan:"Enterprise",ecosystem:"Tendam",coreChannel:"mobile:android",},{score:10,text:"Great",responseDate:"2023-09-3015:42:35+0700",country:"BD",userRole:"Inspector",organization:"316603_Tendam",source:"Android",plan:"Enterprise",ecosystem:"Tendam",coreChannel:"mobile:android",},{score:10,text:"Great",responseDate:"2023-09-3015:42:35+0700",country:"BD",userRole:"Inspector",organization:"316603_Tendam",source:"Android",plan:"Enterprise",ecosystem:"Tendam",coreChannel:"mobile:android",},{score:10,text:"Great",responseDate:"2023-09-3015:42:35+0700",country:"BD",userRole:"Inspector",organization:"316603_Tendam",source:"Android",plan:"Enterprise",ecosystem:"Tendam",coreChannel:"mobile:android",},{score:10,text:"Great",responseDate:"2023-09-3015:42:35+0700",country:"BD",userRole:"Inspector",organization:"316603_Tendam",source:"Android",plan:"Enterprise",ecosystem:"Tendam",coreChannel:"mobile:android",},{score:10,text:"Great",responseDate:"2023-09-3015:42:35+0700",country:"BD",userRole:"Inspector",organization:"316603_Tendam",source:"Android",plan:"Enterprise",ecosystem:"Tendam",coreChannel:"mobile:android",},{score:10,text:"Great",responseDate:"2023-09-3015:42:35+0700",country:"BD",userRole:"Inspector",organization:"316603_Tendam",source:"Android",plan:"Enterprise",ecosystem:"Tendam",coreChannel:"mobile:android",},{score:10,text:"Great",responseDate:"2023-09-3015:42:35+0700",country:"BD",userRole:"Inspector",organization:"316603_Tendam",source:"Android",plan:"Enterprise",ecosystem:"Tendam",coreChannel:"mobile:android",},{score:10,text:"Great",responseDate:"2023-09-3015:42:35+0700",country:"BD",userRole:"Inspector",organization:"316603_Tendam",source:"Android",plan:"Enterprise",ecosystem:"Tendam",coreChannel:"mobile:android",},{score:10,text:"Great",responseDate:"2023-09-3015:42:35+0700",country:"BD",userRole:"Inspector",organization:"316603_Tendam",source:"Android",plan:"Enterprise",ecosystem:"Tendam",coreChannel:"mobile:android",},{score:10,text:"Great",responseDate:"2023-09-3015:42:35+0700",country:"BD",userRole:"Inspector",organization:"316603_Tendam",source:"Android",plan:"Enterprise",ecosystem:"Tendam",coreChannel:"mobile:android",},{score:10,text:"Great",responseDate:"2023-09-3015:42:35+0700",country:"BD",userRole:"Inspector",organization:"316603_Tendam",source:"Android",plan:"Enterprise",ecosystem:"Tendam",coreChannel:"mobile:android",},{score:10,text:"Great",responseDate:"2023-09-3015:42:35+0700",country:"BD",userRole:"Inspector",organization:"316603_Tendam",source:"Android",plan:"Enterprise",ecosystem:"Tendam",coreChannel:"mobile:android",},{score:10,text:"Great",responseDate:"2023-09-3015:42:35+0700",country:"BD",userRole:"Inspector",organization:"316603_Tendam",source:"Android",plan:"Enterprise",ecosystem:"Tendam",coreChannel:"mobile:android",},{score:10,text:"Great",responseDate:"2023-09-3015:42:35+0700",country:"BD",userRole:"Inspector",organization:"316603_Tendam",source:"Android",plan:"Enterprise",ecosystem:"Tendam",coreChannel:"mobile:android",},{score:10,text:"Great",responseDate:"2023-09-3015:42:35+0700",country:"BD",userRole:"Inspector",organization:"316603_Tendam",source:"Android",plan:"Enterprise",ecosystem:"Tendam",coreChannel:"mobile:android",},{score:10,text:"Great",responseDate:"2023-09-3015:42:35+0700",country:"BD",userRole:"Inspector",organization:"316603_Tendam",source:"Android",plan:"Enterprise",ecosystem:"Tendam",coreChannel:"mobile:android",},{score:10,text:"Great",responseDate:"2023-09-3015:42:35+0700",country:"BD",userRole:"Inspector",organization:"316603_Tendam",source:"Android",plan:"Enterprise",ecosystem:"Tendam",coreChannel:"mobile:android",},{score:10,text:"Great",responseDate:"2023-09-3015:42:35+0700",country:"BD",userRole:"Inspector",organization:"316603_Tendam",source:"Android",plan:"Enterprise",ecosystem:"Tendam",coreChannel:"mobile:android",},{score:10,text:"Great",responseDate:"2023-09-3015:42:35+0700",country:"BD",userRole:"Inspector",organization:"316603_Tendam",source:"Android",plan:"Enterprise",ecosystem:"Tendam",coreChannel:"mobile:android",},{score:10,text:"Great",responseDate:"2023-09-3015:42:35+0700",country:"BD",userRole:"Inspector",organization:"316603_Tendam",source:"Android",plan:"Enterprise",ecosystem:"Tendam",coreChannel:"mobile:android",},{score:10,text:"Great",responseDate:"2023-09-3015:42:35+0700",country:"BD",userRole:"Inspector",organization:"316603_Tendam",source:"Android",plan:"Enterprise",ecosystem:"Tendam",coreChannel:"mobile:android",},{score:10,text:"Great",responseDate:"2023-09-3015:42:35+0700",country:"BD",userRole:"Inspector",organization:"316603_Tendam",source:"Android",plan:"Enterprise",ecosystem:"Tendam",coreChannel:"mobile:android",},{score:10,text:"Great",responseDate:"2023-09-3015:42:35+0700",country:"BD",userRole:"Inspector",organization:"316603_Tendam",source:"Android",plan:"Enterprise",ecosystem:"Tendam",coreChannel:"mobile:android",},{score:10,text:"Great",responseDate:"2023-09-3015:42:35+0700",country:"BD",userRole:"Inspector",organization:"316603_Tendam",source:"Android",plan:"Enterprise",ecosystem:"Tendam",coreChannel:"mobile:android",},{score:10,text:"Great",responseDate:"2023-09-3015:42:35+0700",country:"BD",userRole:"Inspector",organization:"316603_Tendam",source:"Android",plan:"Enterprise",ecosystem:"Tendam",coreChannel:"mobile:android",},{score:10,text:"Great",responseDate:"2023-09-3015:42:35+0700",country:"BD",userRole:"Inspector",organization:"316603_Tendam",source:"Android",plan:"Enterprise",ecosystem:"Tendam",coreChannel:"mobile:android",},{score:10,text:"Great",responseDate:"2023-09-3015:42:35+0700",country:"BD",userRole:"Inspector",organization:"316603_Tendam",source:"Android",plan:"Enterprise",ecosystem:"Tendam",coreChannel:"mobile:android",},{score:10,text:"Great",responseDate:"2023-09-3015:42:35+0700",country:"BD",userRole:"Inspector",organization:"316603_Tendam",source:"Android",plan:"Enterprise",ecosystem:"Tendam",coreChannel:"mobile:android",},{score:10,text:"Great",responseDate:"2023-09-3015:42:35+0700",country:"BD",userRole:"Inspector",organization:"316603_Tendam",source:"Android",plan:"Enterprise",ecosystem:"Tendam",coreChannel:"mobile:android",},{score:10,text:"Great",responseDate:"2023-09-3015:42:35+0700",country:"BD",userRole:"Inspector",organization:"316603_Tendam",source:"Android",plan:"Enterprise",ecosystem:"Tendam",coreChannel:"mobile:android",},{score:10,text:"Great",responseDate:"2023-09-3015:42:35+0700",country:"BD",userRole:"Inspector",organization:"316603_Tendam",source:"Android",plan:"Enterprise",ecosystem:"Tendam",coreChannel:"mobile:android",},{score:10,text:"Great",responseDate:"2023-09-3015:42:35+0700",country:"BD",userRole:"Inspector",organization:"316603_Tendam",source:"Android",plan:"Enterprise",ecosystem:"Tendam",coreChannel:"mobile:android",},{score:10,text:"Great",responseDate:"2023-09-3015:42:35+0700",country:"BD",userRole:"Inspector",organization:"316603_Tendam",source:"Android",plan:"Enterprise",ecosystem:"Tendam",coreChannel:"mobile:android",},{score:10,text:"Great",responseDate:"2023-09-3015:42:35+0700",country:"BD",userRole:"Inspector",organization:"316603_Tendam",source:"Android",plan:"Enterprise",ecosystem:"Tendam",coreChannel:"mobile:android",},{score:10,text:"Great",responseDate:"2023-09-3015:42:35+0700",country:"BD",userRole:"Inspector",organization:"316603_Tendam",source:"Android",plan:"Enterprise",ecosystem:"Tendam",coreChannel:"mobile:android",},{score:10,text:"Great",responseDate:"2023-09-3015:42:35+0700",country:"BD",userRole:"Inspector",organization:"316603_Tendam",source:"Android",plan:"Enterprise",ecosystem:"Tendam",coreChannel:"mobile:android",},{score:10,text:"Great",responseDate:"2023-09-3015:42:35+0700",country:"BD",userRole:"Inspector",organization:"316603_Tendam",source:"Android",plan:"Enterprise",ecosystem:"Tendam",coreChannel:"mobile:android",},{score:10,text:"Great",responseDate:"2023-09-3015:42:35+0700",country:"BD",userRole:"Inspector",organization:"316603_Tendam",source:"Android",plan:"Enterprise",ecosystem:"Tendam",coreChannel:"mobile:android",},{score:10,text:"Great",responseDate:"2023-09-3015:42:35+0700",country:"BD",userRole:"Inspector",organization:"316603_Tendam",source:"Android",plan:"Enterprise",ecosystem:"Tendam",coreChannel:"mobile:android",},{score:10,text:"Great",responseDate:"2023-09-3015:42:35+0700",country:"BD",userRole:"Inspector",organization:"316603_Tendam",source:"Android",plan:"Enterprise",ecosystem:"Tendam",coreChannel:"mobile:android",},{score:10,text:"Great",responseDate:"2023-09-3015:42:35+0700",country:"BD",userRole:"Inspector",organization:"316603_Tendam",source:"Android",plan:"Enterprise",ecosystem:"Tendam",coreChannel:"mobile:android",},{score:10,text:"Great",responseDate:"2023-09-3015:42:35+0700",country:"BD",userRole:"Inspector",organization:"316603_Tendam",source:"Android",plan:"Enterprise",ecosystem:"Tendam",coreChannel:"mobile:android",},{score:10,text:"Great",responseDate:"2023-09-3015:42:35+0700",country:"BD",userRole:"Inspector",organization:"316603_Tendam",source:"Android",plan:"Enterprise",ecosystem:"Tendam",coreChannel:"mobile:android",},{score:10,text:"Great",responseDate:"2023-09-3015:42:35+0700",country:"BD",userRole:"Inspector",organization:"316603_Tendam",source:"Android",plan:"Enterprise",ecosystem:"Tendam",coreChannel:"mobile:android",},{score:10,text:"Great",responseDate:"2023-09-3015:42:35+0700",country:"BD",userRole:"Inspector",organization:"316603_Tendam",source:"Android",plan:"Enterprise",ecosystem:"Tendam",coreChannel:"mobile:android",},{score:10,text:"Great",responseDate:"2023-09-3015:42:35+0700",country:"BD",userRole:"Inspector",organization:"316603_Tendam",source:"Android",plan:"Enterprise",ecosystem:"Tendam",coreChannel:"mobile:android",},{score:10,text:"Great",responseDate:"2023-09-3015:42:35+0700",country:"BD",userRole:"Inspector",organization:"316603_Tendam",source:"Android",plan:"Enterprise",ecosystem:"Tendam",coreChannel:"mobile:android",},{score:10,text:"Great",responseDate:"2023-09-3015:42:35+0700",country:"BD",userRole:"Inspector",organization:"316603_Tendam",source:"Android",plan:"Enterprise",ecosystem:"Tendam",coreChannel:"mobile:android",},{score:10,text:"Great",responseDate:"2023-09-3015:42:35+0700",country:"BD",userRole:"Inspector",organization:"316603_Tendam",source:"Android",plan:"Enterprise",ecosystem:"Tendam",coreChannel:"mobile:android",},{score:10,text:"Great",responseDate:"2023-09-3015:42:35+0700",country:"BD",userRole:"Inspector",organization:"316603_Tendam",source:"Android",plan:"Enterprise",ecosystem:"Tendam",coreChannel:"mobile:android",},{score:10,text:"Great",responseDate:"2023-09-3015:42:35+0700",country:"BD",userRole:"Inspector",organization:"316603_Tendam",source:"Android",plan:"Enterprise",ecosystem:"Tendam",coreChannel:"mobile:android",},{score:10,text:"Great",responseDate:"2023-09-3015:42:35+0700",country:"BD",userRole:"Inspector",organization:"316603_Tendam",source:"Android",plan:"Enterprise",ecosystem:"Tendam",coreChannel:"mobile:android",},{score:10,text:"Great",responseDate:"2023-09-3015:42:35+0700",country:"BD",userRole:"Inspector",organization:"316603_Tendam",source:"Android",plan:"Enterprise",ecosystem:"Tendam",coreChannel:"mobile:android",},{score:10,text:"Great",responseDate:"2023-09-3015:42:35+0700",country:"BD",userRole:"Inspector",organization:"316603_Tendam",source:"Android",plan:"Enterprise",ecosystem:"Tendam",coreChannel:"mobile:android",},{score:9,text:null,responseDate:"2023-09-3014:27:47+0700",country:null,userRole:"Inspector",organization:"311257_LibertyMillsLimited",source:"Android",plan:"Professional",ecosystem:"TargetCorp",coreChannel:"mobile:android",},{score:8,text:"null",responseDate:"2023-09-3010:54:48+0700",country:"IN",userRole:"AccountOwner",organization:"311958_MarqueImpexPrivateLtd.",source:"Web",plan:"Enterprise",ecosystem:"Professional",coreChannel:"web",},{score:3,text:"Soso",responseDate:"2023-09-2910:24:32+0700",country:null,userRole:"Inspector",organization:"317612_BV-INDIA",source:"Android",plan:"Enterprise",ecosystem:null,coreChannel:"mobile:android",},{score:1,text:null,responseDate:"2023-09-2810:43:37+0700",country:null,userRole:"Inspector",organization:"317648_BV-THAILAND",source:"Android",plan:"Enterprise",ecosystem:"",coreChannel:"mobile:android",},"';
  public result: any;

  public isLoading: boolean = false;

  @ViewChild("csvImport")
  private csvImport: any;

  public form: FormGroup;

  public get questionFormControl(): FormControl {
    return this.form.get('question') as FormControl;
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
    this.surveyService.getSurvey(this.string).subscribe((response: any) => {
      this.result = response.candidates[0].output;
      this.isLoading = false;
      this.cdr.detectChanges();
    });
  }

  public ngOnInit(): void {
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

  private clearFileUploads(): void {
    this.csvImport.nativeElement.value = "";
  }

  public handleImportCSV(event: Event): void {
    const files = (<HTMLInputElement>event.target).files;
    const input = event.target;
    var reader = new FileReader();
    this.clearFileUploads();
    // reader.readAsText(files[0]);
    // reader.onload = (event: any) => {
    //   var csv = event.target.result; // Content of CSV file
    //   console.log(csv);
    // }
  }
}
