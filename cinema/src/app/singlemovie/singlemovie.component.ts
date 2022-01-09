import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Movie } from '../Movie';
  
@Component({
  selector: 'app-singlemovie',
  templateUrl: './singlemovie.component.html',
  styleUrls: ['./singlemovie.component.css']
})
export class SinglemovieComponent implements OnInit {

 // @Output() smovie: Movie;
 @Output() editMovie: EventEmitter<void>=new EventEmitter();
 @Output() deleteMovie: EventEmitter<void>=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  

}
  