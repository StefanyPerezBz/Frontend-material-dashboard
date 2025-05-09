import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialRoutes } from './material.routing';
import { MaterialModule } from 'app/shared/material-module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CdkTableModule } from '@angular/cdk/table';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(MaterialRoutes),
    MaterialModule, 
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CdkTableModule,
  ]
})
export class MaterialComponentsModule { }
