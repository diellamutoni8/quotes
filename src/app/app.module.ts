import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteDescriptionComponent } from './quote-description/quote-description.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { HighlightDirective } from './highlight.directive';
import { DateCounterPipe } from './date-counter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteDescriptionComponent,
    QuoteFormComponent,
    HighlightDirective,
    DateCounterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
