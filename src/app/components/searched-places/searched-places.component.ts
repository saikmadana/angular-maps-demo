import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { MESSAGES } from '../../constants/messages';

@Component({
  selector: 'app-searched-places',
  templateUrl: './searched-places.component.html',
  styleUrls: ['./searched-places.component.scss']
})
export class SearchedPlacesComponent implements OnInit {

  locations: any[] = []
  MESSAGES = MESSAGES;

  constructor(private dataSer: DataService) { }

  ngOnInit(): void {
    this.locations = this.dataSer.getData(this.dataSer.types.LOCATIONS);
  }

}
