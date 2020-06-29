import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent} from './movies.component';

@NgModule({
  imports:[CommonModule, SharedModule],
  declarations: [MoviesComponent],
  exports: [MoviesComponent]
})
export class MoviesModule {}