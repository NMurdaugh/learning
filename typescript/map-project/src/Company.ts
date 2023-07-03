import { faker } from "@faker-js/faker";


export class Company {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    const { company, location } = faker
    this.name = company.name();
    this.catchPhrase = company.catchPhrase();
    this.location = {
      lat: location.latitude(),
      lng: location.longitude()
    };
  };
}