import { Component, OnInit } from '@angular/core';
import { Show } from '../Show';
import { Shows } from "../shows-mock";
import { Rooms } from '../rooms'
import { AddShowComponent } from '../add-show/add-show.component'
import { EditShowComponent } from '../edit-show/edit-show.component'
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {
  showList = Shows;
  selectedShow: any = null;
  headers: string[] = [];
  selected = false;
  newShow: Show;

  constructor(public dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    let dialogRef = null;
    dialogRef = this.dialog.open(AddShowComponent, {
        width: '30%',
        data: {}
    })
  }

  openShow(show: Show) {
      this.router.navigate(['show/' + show.id]);
  }

  deleteShow(showToDelete: Show): void{
    // this.movieList=this.movieList.splice(this.movieList.indexOf(movie));
    console.log('delete' + showToDelete.movie.title);
    this.showList = this.showList.filter(obj => obj !== showToDelete);
  }
}
