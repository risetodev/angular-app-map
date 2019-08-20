import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ILocation, IPlace } from "./API/types";
import { GOOGLE_APIES, GOOGLE_MAPS_API_KEY } from "./API/API";
import { ancestorWhere } from "tslint";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.css"]
})
export class MapComponent implements OnInit {
  zoom = 12;
  panelOpenState = false;
  currentLocation: ILocation = {
    lat: 46.469391,
    lng: 30.740883
  };

  pharmacies: IPlace[] = [];
  schools: IPlace[] = [];
  gasStation: IPlace[] = [];
  restaurants: IPlace[] = [];

  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.getPlaces("pharmacy", this.currentLocation).then(res =>
      Object.assign(this.pharmacies, res)
    );
    this.getPlaces("school", this.currentLocation).then(res =>
      Object.assign(this.schools, res)
    );
    this.getPlaces("gasStation", this.currentLocation).then(res =>
      Object.assign(this.gasStation, res)
    );
    this.getPlaces("restaurant", this.currentLocation).then(res =>
      Object.assign(this.restaurants, res)
    );
  }

  getPlaces = (place: string, center: ILocation) => {
    return this.http
      .get<any>(
        `${GOOGLE_APIES}json?location=${center.lat},${center.lng}&radius=5000&type=${place}&key=${GOOGLE_MAPS_API_KEY}`
      )
      .toPromise()
      .then(response => {
        return response.results.map(item => ({
          id: item.id,
          icon: item.icon,
          name: item.name,
          location: {
            lat: item.geometry.location.lat,
            lng: item.geometry.location.lng
          },
          vicinity: item.vicinity
        }));
      })
      .catch(e => console.log(e));
  };
}
