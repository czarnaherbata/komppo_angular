import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './movie/movie.component'
import { HomeComponent } from './home/home.component';
import { ShowsComponent } from './shows/shows.component'
import { ShowComponent } from './show/show.component';
import { splitAtColon } from '@angular/compiler/src/util';
import { publishFacade } from '@angular/compiler';

const routes: Routes = [
  { path: 'home', component: HomeComponent }, 
  { path: 'allMovies', component: MovieComponent},
  { path: 'allShows', component: ShowsComponent},
  { path: 'show/:id', component: ShowComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
