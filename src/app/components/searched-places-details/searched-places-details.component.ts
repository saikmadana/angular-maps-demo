import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { MESSAGES } from '../../constants/messages';

@Component({
  selector: 'app-searched-places-details',
  templateUrl: './searched-places-details.component.html',
  styleUrls: ['./searched-places-details.component.scss']
})
export class SearchedPlacesDetailsComponent implements OnInit {
  locations: any[] = [];
  MESSAGES = MESSAGES;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.locations = this.dataService.getData(this.dataService.types.LOCATIONS);
  }

}
