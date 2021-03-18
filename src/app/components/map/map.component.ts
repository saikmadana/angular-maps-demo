import { Component, OnInit, ViewChild } from '@angular/core';
import { MapsAPILoader, AgmMap } from '@agm/core';
import { DataService } from 'src/app/services/data.service';
import { MESSAGES } from 'src/app/constants/messages';
import { Location } from '../../models/map.model'

declare var google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  geocoder: any;

  // To show by default
  public location: Location = {
    lat: 17.385044,
    lng: 78.486671,
    marker: {
      lat: 17.385044,
      lng: 78.486671
    },
    zoom: 10,
  };

  @ViewChild(AgmMap) map: AgmMap;

  constructor(public mapsApiLoader: MapsAPILoader,
    private dataService: DataService) {
    this.mapsApiLoader = mapsApiLoader;
    this.mapsApiLoader.load().then(() => {
      this.geocoder = new google.maps.Geocoder();
    });
  }

  ngOnInit(): void {
  }

  /**
   * To get the location data based on the entered input
   * @param searchStr searched location name
   * @returns void
   */
  getLocationDetails(searchStr) {
    if(!searchStr) {
      alert(MESSAGES.PLEASE_ENTER_NAME);
      return
    }
    if (!this.geocoder) this.geocoder = new google.maps.Geocoder()
    this.geocoder.geocode({
      'address': searchStr
    }, (results, status) => {
      console.log(results, "resultsss");
      if (status == google.maps.GeocoderStatus.OK) {
        const currentLocation = this.massageLocationData(results);
        if (currentLocation) {
          this.location = currentLocation
          this.dataService.setData(this.dataService.types.LOCATIONS, currentLocation)
          this.map.triggerResize()
        }
      } else {
        alert(MESSAGES.LOCATION_NOT_FOUND);
      }
    })
  }

  massageLocationData(data) {
    if (!data || !Array.isArray(data) || !data.length) {
      return
    }
    const [firstResult] = data
    if (firstResult.geometry.location) {
      return {
        lat: firstResult.geometry.location.lat(),
        lng: firstResult.geometry.location.lng(),
        formatted_address: firstResult.formatted_address,
        name: firstResult.address_components[0].long_name,
        marker: {
          lat: firstResult.geometry.location.lat(),
          lng: firstResult.geometry.location.lng()
        },
        viewport: firstResult.geometry.viewport,
        zoom: 10
      }
    }
  }

}