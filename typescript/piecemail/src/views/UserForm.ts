import { IUserProps, User } from '../models/User';
import { View } from './View';

export class UserForm extends View<User, IUserProps> {
  //stay
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick,
      'click:.save-model': this.onSaveModelClick,
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

  onSaveModelClick = (): void => {
    this.model.save();
  };

  //stay/extract
  template(): string {
    return `
      <div>
        <input class="name-input" placeholder="${this.model.get('name')}" />
        <button class="set-name">Change Name</button>
        <button class="set-age">Set random age</button>
        <button class="save-model">Save User</button>
      </div>
    `;
  }
}
