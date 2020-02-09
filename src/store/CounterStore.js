import { observable, action, autorun, reaction, when } from 'mobx';

class CounterStore {
  @observable count = 1;

  constructor() {
    reaction(
      () => this.count,
      count => {
        if (count === 5) {
          alert('5 oldu');
        }
      }
    )
  }

  @action arttir = () => {
    this.count++;
  }

  @action azalt = () => {
    this.count--;
  }

}

export default new CounterStore();