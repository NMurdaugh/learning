import { IUserProps, User } from '../models/User';
import { View } from './View';

export class UserEdit extends View<User, IUserProps> {
  template(): string {
    return `
      <div>
        <div class="user-show"></div>
        <div class="user-form"></div>
      </div>
    `;
  }
}
