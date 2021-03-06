import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GetStartedComponent } from './components/get-started/get-started.component';
import { ExponentialStrengthPipe } from './pipes/exponential-strength.pipe';
import { HeaderComponent } from './components/layout/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './modules/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    GetStartedComponent,
    ExponentialStrengthPipe,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
