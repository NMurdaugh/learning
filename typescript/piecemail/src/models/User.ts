import axios, { AxiosResponse } from "axios";

export interface UserProps {
  id?: number;
  name?: string;
  age?: number
}


export class User {
  constructor(private data: UserProps) {}

  get(propName: string): string | number {
    return this.data[propName as keyof UserProps]!;
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  fetch(): void {
    axios.get(`http://localhost:3000/users/${this.get('id')}`)
      .then((response: AxiosResponse): void => {
        this.set(response.data);
    })
  }

  save(): void {
    const id = this.get('id');

    if (id) {
      axios.put(`http://localhost:3000/users/${id}`, this.data);
    } else {
      axios.post('axios.put(`http://localhost:3000/users`)', this.data)
    }
  }
}