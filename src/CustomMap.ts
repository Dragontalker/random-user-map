import { User } from './User';
import { Company } from './Company';

// Instruction to every other class
// on how they can be an argument to 'addMarker'
interface Mappable {
  location: {
    lat: number;
    lng: number;
  }
};

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(elementId: string, zoomLevel: number, latCoord: number, lngCoord: number) {
    this.googleMap = new google.maps.Map(document.getElementById(elementId), {
      zoom: zoomLevel,
      center: {
        lat: latCoord,
        lng: lngCoord
      }
    });
  };

  addMarker(mappable: User | Company): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });
  };

  // addCompanyMarker(company: Company): void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: company.location.lat,
  //       lng: company.location.lng
  //     }
  //   });
  // };
};