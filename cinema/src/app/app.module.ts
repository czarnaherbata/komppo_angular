import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
//import { MoviesMovieComponent } from './movies-movie/movies-movie.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SinglemovieComponent } from './singlemovie/singlemovie.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ShowsComponent } from './shows/shows.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
//import { MoviesComponent } from './movies/movies.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    EditMovieComponent,
    AddMovieComponent,
    SinglemovieComponent,
    ShowsComponent,
    HomeComponent,
   // MoviesMovieComponent,
    //MoviesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    AppRoutingModule
  ],
  providers: [
      {
          provide: MatDialogRef,
          useValue: {}
      },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
