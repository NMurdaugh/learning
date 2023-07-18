import { IUserProps, User } from '../models/User';
import { View } from './View';

export class UserForm extends View<User, IUserProps> {
  //stay
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick,
    };
  }

  //stay
  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  //stay
  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input')!;

    const name = input.value;
    this.model.set({ name });
  };

  //stay/extract
  template(): string {
    return `
      <div>
        <h1 class="header">User Form</h1>
        <div>User Name ${this.model.get('name')}</div>
        <div>User Name ${this.model.get('age')}</div>
        <input / class="name-input"> <button class="set-name">Change Name</button>
        <button class="set-age">Set random age</button>
      </div>
    `;
  }
}
