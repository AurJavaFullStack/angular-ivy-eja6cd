import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {APP_BASE_HREF} from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {routes} from './app.routes';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { MoviesModule } from './movies/movies.module';
import { SharedModule } from './shared/shared.module';
import { MoviesModule } from './movies/movies.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule,RouterModule.forRoot(routes),AboutModule,HomeModule,SharedModule.forRoot()],
  declarations: [ AppComponent ],
  providers:[{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
