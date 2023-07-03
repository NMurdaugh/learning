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
}