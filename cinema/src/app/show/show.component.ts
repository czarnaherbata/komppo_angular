import { Component, OnInit } from '@angular/core';
import { ShowsHttpService } from '../shows-http.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Movie } from '../Movie';
import { Show } from '../Show';
import { Rooms } from '../rooms'
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { AddShowComponent } from '../add-show/add-show.component';
import { EditShowComponent } from '../edit-show/edit-show.component';

import { ImplicitReceiver } from '@angular/compiler';



@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css'],
  providers: [ShowsHttpService]
})
export class ShowComponent implements OnInit {
  showId: any;
  show: Show;
  showList: Show[] = [];
  rooms = Rooms;
  newShow: Show;
  selectedShow: any = null;

  constructor(private showService: ShowsHttpService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => this.showId = params.get('id'));
    this.showService.getShowById(this.showId).subscribe(show => this.show = show)
  }

  ngOnInit(): void {
  }
  
 editShow(showToEdit: Show){
 // this.newShow=new Show(this.selectedShow.id, result.title, )

 }
 
  deleteShow(showToDelete: Show): void {
    this.showService.deleteShow(showToDelete).subscribe(result => this.showList = this.showList.filter(obj => obj !== showToDelete));
  }
}
