import { Component, OnInit, Input,  Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { EventEmitter } from '@angular/core';
import { Movie } from '../Movie';
  
@Component({
  selector: 'app-singlemovie',
  templateUrl: './singlemovie.component.html',
  styleUrls: ['./singlemovie.component.css']
})
export class SinglemovieComponent implements OnInit {
  @Input() movie: Movie;

  constructor() { }

  ngOnInit(): void {
  }
  

}
  