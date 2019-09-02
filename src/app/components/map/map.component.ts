import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ILocation, IMarker, IPlace } from "./API/types";
import { GOOGLE_APIES, GOOGLE_MAPS_API_KEY } from "./API/API";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.css"]
})
export class MapComponent implements OnInit {
  constructor(private http: HttpClient) {}
  private isPanelOpenState = false;
  private isMyLocation = false;
  private placesToShow: string;
  private currentLocation: ILocation = {
    lat: 46.469391,
    lng: 30.740883
  };
  private places: string[] = [
    "Pharmacies",
    "Schools",
    "Gas stations",
    "Restaurants"
  ];
  private pharmacies: IPlace[] = [];
  private schools: IPlace[] = [];
  private gasStation: IPlace[] = [];
  private restaurants: IPlace[] = [];
  private marksOfThePlaces: IPlace[] = [];
  private customMarkers: IMarker[] = [];
  private isCustomMarkers = true;

  ngOnInit() {
    this.getData();
  }

  mapClicked = ($event: any): void => {
    this.customMarkers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
    this.isMyLocation = false;
    if (this.customMarkers.length === 1) {
      this.currentLocation.lat = this.customMarkers[0].lat;
      this.currentLocation.lng = this.customMarkers[0].lng;
      this.getData();
    }
  };

  markerDragEnd = (marker: IMarker, $event: any): void => {
    this.customMarkers = this.customMarkers.map(item =>
      item.lat === marker.lat && item.lng === marker.lng
        ? { ...item, lat: $event.coords.lat, lng: $event.coords.lng }
        : item
    );
  };

  removeMarker = (marker: IMarker): void => {
    this.customMarkers = this.customMarkers.filter(
      item => item.lat !== marker.lat && item.lng !== marker.lng
    );
    if (this.customMarkers.length === 1) {
      this.currentLocation.lat = this.customMarkers[0].lat;
      this.currentLocation.lng = this.customMarkers[0].lng;
      this.getData();
    }
  };

  save = (): void => {
    !this.customMarkers.length
      ? alert("Nothing to save")
      : (this.isCustomMarkers = false);
  };

  show = (): void => {
    !this.customMarkers.length
      ? alert("Nothing to show")
      : (this.isCustomMarkers = true);
  };

  delete = (): void => {
    if (!this.customMarkers.length) {
      alert("Nothing to delete");
    } else {
      this.customMarkers = [];
      this.isCustomMarkers = true;
    }
  };

  findMe = () =>
    this.getLocation().then((location: ILocation) => {
      this.currentLocation.lat = location.lat;
      this.currentLocation.lng = location.lng;
      this.getData();
      this.isMyLocation = !this.isMyLocation;
    });

  showPlaces = (place: string, isShown: boolean): void => {
    if (this.placesToShow === place) {
      this.isPanelOpenState = isShown;
      return;
    }
    this.isPanelOpenState = true;
    this.placesToShow = place;
    switch (place) {
      case "Pharmacies":
        Object.assign(this.marksOfThePlaces, this.pharmacies);
        break;
      case "Schools":
        Object.assign(this.marksOfThePlaces, this.schools);
        break;
      case "Gas stations":
        Object.assign(this.marksOfThePlaces, this.gasStation);
        break;
      case "Restaurants":
        Object.assign(this.marksOfThePlaces, this.restaurants);
        break;
    }
  };

  getData = (): void => {
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
  };

  getLocation = (): Promise<ILocation> =>
    new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        resp => {
          resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude });
        },
        err => {
          reject(err);
        }
      );
    });

  getPlaces = (place: string, center: ILocation): Promise<IPlace> =>
    this.http
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
}
