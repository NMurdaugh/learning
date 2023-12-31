import { AxiosPromise, AxiosResponse } from 'axios';

export interface IModelAttributes<T> {
  set(update: T): void;
  get<K extends keyof T>(key: K): T[K];
  getAll(): T;
}

export interface ISync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

export interface IEvents {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}

export interface IHasId {
  id?: number;
}

export class Model<T extends IHasId> {
  constructor(
    private attributes: IModelAttributes<T>,
    private events: IEvents,
    private sync: ISync<T>
  ) {}

  on = this.events.on;

  trigger = this.events.trigger;

  get = this.attributes.get;

  set(update: T): void {
    this.attributes.set(update);
    this.events.trigger('change');
  }

  fetch(): void {
    const id = this.get('id');

    if (typeof id !== 'number') {
      throw new Error('Cannot fetch without id');
    }

    this.sync.fetch(id).then((response: AxiosResponse): void => {
      this.set(response.data);
    });
  }

  save(): void {
    this.sync
      .save(this.attributes.getAll())
      .then((response: AxiosResponse): void => {
        this.trigger('save');
      })
      .catch(() => {
        this.trigger('error');
      });
  }
}
