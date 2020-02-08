import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  Sub: Subscription

  constructor(private back: BackendService) {}

  ngOnInit() {
    this.Sub = this.back.Home().subscribe(
      (data: any) => {console.log(data)},
      (e) => {console.log(e) }
    );
  }

  ngOnDestroy(){
    this.Sub.unsubscribe()
  }

}
