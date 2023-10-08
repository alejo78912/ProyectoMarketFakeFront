import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  constructor() { }

  private searchSubject = new Subject<string>();

  setSearchQuery(query: string) {
    this.searchSubject.next(query);
  }

  getSearchQuery(): Observable<string> {
    return this.searchSubject.asObservable();
  }
}
