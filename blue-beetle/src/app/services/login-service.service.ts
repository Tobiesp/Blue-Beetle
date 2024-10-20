import { Injectable } from '@angular/core';
import { LoggerService } from './logger-service.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ILoginState {
  Authenticated: boolean
  Username: string
  DisplayName: string
  roles: number
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private logger: LoggerService,
    private httpClient: HttpClient
  ) { }

  public login(username: string, password: string): Observable<boolean> {
    let state: ILoginState = {
      Authenticated: false,
      Username: "",
      DisplayName: "",
      roles: 0,
    };

    let error: string = "";

    if (username === 'test' && password === 'test') {
      state = {
        Authenticated: true,
        Username: "test",
        DisplayName: "Test User",
        roles: 1
      };
      this.setState(state);
    } else {
      error = "Failed to login"
      this.clearState();
    }
    
      const observer = new Observable<boolean>;
      observer.subscribe({
        next() {
          return state.Authenticated;
        },
        error() {
          return error
        }
      })
        
      return observer;
    //TODO: Add external api call
  }

  public logout() {
    //TODO: Add external api call
    this.clearState();
  }

  public isAuthenticated(): boolean {
    const state: ILoginState = this.getState();
    if (state) {
      return state.Authenticated;
    }
    return false;
  }

  public isAdmin(): boolean {
    if (! this.isAuthenticated()) {
      return false
    }
    const state: ILoginState = this.getState();
    return (1 & state.roles) == 1
  }

  private setState(state: ILoginState) {
    localStorage.setItem('loginstate', JSON.stringify(state));
  }

  private getState(): ILoginState {
    const item = localStorage.getItem('loginstate');
    return item ? JSON.parse(item) : null;
  }

  private clearState() {
    localStorage.clear();
  }
}
