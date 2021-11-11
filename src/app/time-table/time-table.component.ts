import {Component, OnInit} from '@angular/core';
import {ServService} from '../serv.service';

@Component({
  selector: 'app-time-table',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.scss']
})
export class TimeTableComponent implements OnInit {

  constructor(public serv: ServService) {
  }

  entries = this.serv.entries;

  ngOnInit(): void {
  }

}
