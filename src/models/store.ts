import { Entry } from './album';

export interface Store {
  current: Entry;
  albums: Entry[];
}

export class Store implements Store {
  public current: Entry | undefined = undefined;
  public albums: Entry[] = [];
}
