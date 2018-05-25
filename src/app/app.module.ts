// Angular Built-In Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// User Defined
import { AppComponent } from './app.component';
import { CrudComponent } from './medicine/crud/crud.component';
import { MedicineApiService } from './services/medicine-api.service';
import { FilterPipe } from './pipes/filter.pipe';
import { InsertTextDirective } from './directives/insert-text.directive';


@NgModule({
  declarations: [
    AppComponent,
    CrudComponent,
    FilterPipe,
    InsertTextDirective
  ],
  imports: [
    BrowserModule ,
        HttpClientModule, FormsModule,
      ReactiveFormsModule
  ],
  providers: [MedicineApiService , HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
