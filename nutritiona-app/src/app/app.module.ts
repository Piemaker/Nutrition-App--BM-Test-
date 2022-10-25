import { MatIconModule } from '@angular/material/icon';
import { EdamamAPIInterceptor } from './interceptors/edamam-api.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';


import { AppComponent } from './app.component';
import { NavComponent } from './core/nav/nav.component';
import { HeaderComponent } from './core/header/header.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, NavComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTabsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: EdamamAPIInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
