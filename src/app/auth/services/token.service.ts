import { Injectable, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private token: string | null = null;

  private _currentToken = signal<string | null>(null);

  public currentToken = computed(() => this._currentToken());

  setToken(token: string) {
    this.token = token;
  }

  getToken(): string | null {
    return this.token;
  }

  removeToken() {
    this.token = null;
  }
}
