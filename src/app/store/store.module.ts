import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelModule } from '../model/model.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreComponent } from './store.component';

@NgModule({
  declarations: [StoreComponent],
  imports: [CommonModule, ModelModule, BrowserModule, FormsModule],
  exports: [StoreComponent]
})
export class StoreModule {}
