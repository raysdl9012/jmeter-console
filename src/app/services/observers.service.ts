import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObserversService {

  // Evento que se genera para cambiar de step
  private changeStatusStep$: Subject<number> = new Subject<number>();

  constructor() { }

  public getSignalChangeStatusSteps(){
    return this.changeStatusStep$
  }

  public setSignalChangeStatusSteps(step: number){
    this.changeStatusStep$.next(step);
  }
}
