import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MessageService {

  private toggleMessage =  new BehaviorSubject<any>('');
  toggleMessageData = this.toggleMessage.asObservable();

  visitToggleMessage(message: any) {
    console.log('message', message);
    this.toggleMessage.next(message);
  }

}
