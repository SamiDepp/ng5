import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs-compat/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DataGoalService {
  private goals = new BehaviorSubject<any>(['The initial goal', 'Another silly life goal']);
  goal = this.goals.asObservable();

  constructor() { }

  changeGoal(goal) {
    this.goals.next(goal);
  }
}
