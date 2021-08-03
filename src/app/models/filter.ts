export class Filter {
  prop1: string;
  prop2: string;
  constructor(filter: Filter) {
    if (filter) {
      Object.assign(this, filter);
    }
  }
}

