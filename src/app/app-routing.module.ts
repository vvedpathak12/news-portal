import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessnewsComponent } from './businessnews/businessnews.component';
import { SportnewsComponent } from './sportnews/sportnews.component';
import { TechNewsComponent } from './tech-news/tech-news.component';
import { TopHeadlineComponent } from './top-headline/top-headline.component';

const routes: Routes = [
  {path:"" , component:TopHeadlineComponent},//topheadline & home
  {path:"business" , component:BusinessnewsComponent},//business
  {path:"tech" , component:TechNewsComponent},//technology
  {path:"sports" , component:SportnewsComponent},//sport news

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
