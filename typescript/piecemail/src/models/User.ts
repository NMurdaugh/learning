import { ApiSync } from './ApiSync';
import { Attributes } from './Attributes';
import { Collection } from './Collection';
import { Eventing } from './Eventing';
import { Model } from './Model';

export interface IUserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = 'http://localhost:3000/users';

export class User extends Model<IUserProps> {
  static buildUser(attrs: IUserProps) {
    return new User(
      new Attributes<IUserProps>(attrs),
      new Eventing(),
      new ApiSync<IUserProps>(rootUrl)
    );
  }

  static buildUserCollection(): Collection<User, IUserProps> {
    return new Collection<User, IUserProps>(rootUrl, (json: IUserProps) =>
      User.buildUser(json)
    );
  }

  setRandomAge = (): void => {
    const min = Math.min(0);
    const max = Math.max(101);
    const randomAge = Math.floor(Math.random() * (max - min) + min);
    this.set({ age: randomAge });
  };
}
