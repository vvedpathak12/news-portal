import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeadlineComponent } from './top-headline/top-headline.component';
import { BusinessnewsComponent } from './businessnews/businessnews.component';
import { TechNewsComponent } from './tech-news/tech-news.component';
import { SportnewsComponent } from './sportnews/sportnews.component';
import { FilterPipe } from './filter.pipe';
import { HeaderComponent } from './header/header.component';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';

@NgModule({
  declarations: [
    AppComponent,
    TopHeadlineComponent,
    BusinessnewsComponent,
    TechNewsComponent,
    SportnewsComponent,
    FilterPipe,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LoadingBarRouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
