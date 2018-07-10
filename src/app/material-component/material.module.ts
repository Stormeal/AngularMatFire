import 'hammerjs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { DemoMaterialModule} from '../demo-material-module';
import { CdkTableModule } from '@angular/cdk/table';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialRoutes } from './material.routing';

import { HomeComponent } from './home/home.component';
import { ReportsComponent } from './reports/reports.component';
import { UsersComponent } from './users/users.component';
import { StingsComponent } from './stings/stings.component';
import { EmployeesComponent } from './employees/employees.component';
import { EditDialogComponent } from './users/edit-dialog/edit-dialog.component';
import { EditComponent } from './employees/edit/edit.component';
import { NotificationMessageComponent } from './notification-message/notification-message.component';

import { MatDialogActions } from '@angular/material';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MaterialRoutes),
    DemoMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CdkTableModule,
    NgxDatatableModule
  ],
  providers: [

  ],
  entryComponents: [ EditDialogComponent, EditComponent, NotificationMessageComponent  ],
  declarations: [
    HomeComponent,
    ReportsComponent,
    UsersComponent,
    StingsComponent,
    EmployeesComponent,
    EditDialogComponent,
    EditComponent,
    NotificationMessageComponent
  ]
})

export class MaterialComponentsModule {}
