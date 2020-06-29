import { MoviesModule } from '../movies/movies.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent} from './shared.component';

@NgModule({
  imports:[CommonModule, MoviesModule],
  declarations: [SharedComponent],
  exports: [SharedComponent]
})
export class SharedModule {}