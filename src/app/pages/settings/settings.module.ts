import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';


@NgModule({
  declarations: [
    SettingsComponent
  ],
  imports: [
    CommonModule,
    NzInputModule,
    NzIconModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
