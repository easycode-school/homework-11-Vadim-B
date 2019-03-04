import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { HeaderComponent } from './modules/header/components/header/header.component';
import { ChallengesPageComponent } from './modules/challenges/components/challenges-page/challenges-page.component';
import { ChallengesItemComponent } from './modules/challenges/components/challenges-item/challenges-item.component';
import { MatTabsModule } from '@angular/material/tabs';
import { NumFormatChangePipe } from './pipes/num-format-change.pipe';
import { DateTransformDirective } from './date-transform.directive';
import { DateTransformPipe } from './pipes/date-transform.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChallengesPageComponent,
    ChallengesItemComponent,
    NumFormatChangePipe,
    DateTransformDirective,
    DateTransformPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastModule,
    MatTabsModule
  ],
  providers: [MessageService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
