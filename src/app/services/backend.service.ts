import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient, private keycloakService: KeycloakService) { }

  Home(): Observable<any>{
    return this.http.get<any>(environment.API_URL+"/home");
  }
}
