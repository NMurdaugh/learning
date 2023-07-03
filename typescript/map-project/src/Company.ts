import { faker } from "@faker-js/faker";
import { CanBeMapped } from "./Map";

export class Company implements CanBeMapped {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  }

  constructor() {
    const { company, location } = faker
    this.name = company.name();
    this.catchPhrase = company.catchPhrase();
    this.location = {
      lat: location.latitude(),
      lng: location.longitude()
    };
  }

  markerContent(): string {
    return `
      <div>
        <h1>Company: ${this.name}</h1>
        <h3>${this.catchPhrase}</h3>
      </div>    
    `;
  }
}