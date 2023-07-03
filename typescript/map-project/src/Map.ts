interface CanBeMapped {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(elementId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(elementId)!, {
      zoom: 3,
      center: {
        lat: 39.183609,
        lng: -96.571671,
      }
    });
  }

  addMarker(mappable: CanBeMapped): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: mappable.location
    });

    const infoWindow = new google.maps.InfoWindow({
      content: `
      <div style="text-align: center;">
        ${mappable.markerContent()}
      </div>
      `
    });

    marker.addListener('click', () => {
      infoWindow.open(this.googleMap, marker);
    });
  }
}