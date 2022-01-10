import { Component, OnInit } from '@angular/core';
import { Show } from '../Show';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {
  showList = Show;
  selectedShow: any = null;
  headers: string[] = [];
  selected = false;
  newShow: Show;
  constructor() { }

  ngOnInit(): void {
  }

}
