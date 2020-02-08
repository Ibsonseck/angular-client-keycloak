import { Component, OnInit, OnDestroy } from '@angular/core';
import { KeycloakProfile } from 'keycloak-js';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  userDetails: KeycloakProfile;
  admin: boolean;
  
  constructor(private keycloakService: KeycloakService) {}

  async ngOnInit() {
    if (await this.keycloakService.isLoggedIn()) {
      this.userDetails = await this.keycloakService.loadUserProfile();
      this.admin = this.keycloakService.isUserInRole("admin");
    }
  }

  async doLogout() {
    await this.keycloakService.logout();
  }

}
