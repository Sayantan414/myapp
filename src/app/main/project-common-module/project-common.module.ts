import { CommonModule, NgIf, NgFor, DatePipe } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { MaterialModule } from "../../Angular-material-Element/material.module";



@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterLink,
    NgIf,
    NgFor,
    FormsModule,
    ReactiveFormsModule,
    DatePipe


  ],
  exports: [
    CommonModule,
    MaterialModule,
    RouterLink,
    NgIf,
    NgFor,
    FormsModule,
    ReactiveFormsModule,
    DatePipe
  ]
})
export class ProjectCommonModule {
}
