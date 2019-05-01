import { Entry } from './album';

export interface Store {
  current: Entry;
  albums: Entry[];
  search: Entry[];
}

export class Store implements Store {
  public current: Entry | undefined = undefined;
  public albums: Entry[] = [];
  public search: Entry[] = [];
}
