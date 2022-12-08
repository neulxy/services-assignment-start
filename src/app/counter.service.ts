import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  inactiveToActive: number;
  activeToInactive: number;

  constructor() {
    this.inactiveToActive = 0;
    this.activeToInactive = 0;
  }

  countInactiveToActive() {
    ++this.inactiveToActive;
    console.log('Inactive to active: ' + this.inactiveToActive);
  }

  countActiveToInactive() {
    ++this.activeToInactive;
    console.log('Active to inactive: ' + this.activeToInactive);
  }
}
