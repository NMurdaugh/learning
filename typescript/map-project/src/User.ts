import { faker } from "@faker-js/faker";

export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  }

  constructor() {
    const { person, location } = faker
    this.name = person.firstName();
    this.location = {
      lat: location.latitude(),
      lng: location.longitude(),
    };
  };

  markerContent(): string {
    return `
      <div>
        <h1>User: ${this.name}</h1>
      </div>
    `;
  }
}