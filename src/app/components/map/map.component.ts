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
  isPanelOpenState = false;
  isMyLocation = false;
  placesToShow: string;
  currentLocation: ILocation = {
    lat: 46.469391,
    lng: 30.740883
  };
  places: string[] = ["Pharmacies", "Schools", "Gas stations", "Restaurants"];
  pharmacies: IPlace[] = [];
  schools: IPlace[] = [];
  gasStation: IPlace[] = [];
  restaurants: IPlace[] = [];
  marksOfThePlaces: IPlace[] = [];
  customMarkers: IMarker[] = [];

  ngOnInit() {
    this.getData();
  }
  mapClicked($event: MouseEvent) {
    this.customMarkers.push({
      // @ts-ignore
      lat: $event.coords.lat,
      // @ts-ignore
      lng: $event.coords.lng,
      draggable: true
    });
  }

  // TODO: Implement those functions
  save = () => {};
  show = () => {};
  delete = () => {};
  // TODO: Delete certain marker by second click

  markerDragEnd(marker: IMarker, $event: MouseEvent) {
    console.log("dragEnd", marker, $event);
    this.customMarkers.map(item =>
      item.lat !== marker.lat && item.lng !== marker.lng ? marker : item
    );
  }

  findMe = () =>
    this.getLocation().then(location => {
      this.currentLocation.lat = location.lat;
      this.currentLocation.lng = location.lng;
      this.getData();
      this.isMyLocation = !this.isMyLocation;
    });

  showPlaces = (place: string) => {
    if (this.placesToShow !== place) {
      switch (place) {
        case "Pharmacies":
          Object.assign(this.marksOfThePlaces, this.pharmacies);
          this.placesToShow = place;
          this.isPanelOpenState = true;
          break;
        case "Schools":
          Object.assign(this.marksOfThePlaces, this.schools);
          this.placesToShow = place;
          this.isPanelOpenState = true;
          break;
        case "Gas stations":
          Object.assign(this.marksOfThePlaces, this.gasStation);
          this.placesToShow = place;
          this.isPanelOpenState = true;
          break;
        case "Restaurants":
          Object.assign(this.marksOfThePlaces, this.restaurants);
          this.placesToShow = place;
          this.isPanelOpenState = true;
          break;
        default:
          Object.assign(this.marksOfThePlaces, []);
          break;
      }
    } else if (this.placesToShow === place) {
      this.isPanelOpenState = false;
    }
  };

  getData = () => {
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

  getLocation(): Promise<any> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        resp => {
          resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude });
        },
        err => {
          reject(err);
        }
      );
    });
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
