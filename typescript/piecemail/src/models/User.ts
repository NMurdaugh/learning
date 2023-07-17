import { ApiSync } from './ApiSync';
import { Attributes } from './Attributes';
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
}
