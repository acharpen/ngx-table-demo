import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxTableModule } from '@oorg/ngx-table';

import { AppComponent } from './app.component';
import { ThemePickerComponent } from './components/theme-picker/theme-picker.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, ThemePickerComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    NgxTableModule
  ]
})
export class AppModule {}
