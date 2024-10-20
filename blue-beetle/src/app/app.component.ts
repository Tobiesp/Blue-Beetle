import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { LoginService } from './services/login-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blue-beetle';

  constructor(
    private loginService: LoginService,
    private router: Router
  ){
  }

  public isAuthed(): boolean {
    return this.loginService.isAuthenticated();
  }

  public logout() {
    this.loginService.logout();
    this.router.navigate(['/login'])
  }

  public menuAction(event: Event) {
    const targetElement = event.target as HTMLElement;
    const parent = targetElement.parentElement;
    const ariaControl = parent?.getAttribute('aria-controls');
    console.log(ariaControl);
    if (ariaControl && ariaControl !== '') {
      const div = document.getElementById(ariaControl) as HTMLElement;
      if (div !== null) {
        if (div.style.display === 'block') {
          div.style.display = 'none';
        } else {
          div.style.display = 'block';
        }
      }
    } else {
      const div = parent?.parentElement?.nextSibling as HTMLElement;
      if (div.style.display === 'block') {
        div.style.display = 'none';
      } else {
        div.style.display = 'block';
      }
    }
  }
}
