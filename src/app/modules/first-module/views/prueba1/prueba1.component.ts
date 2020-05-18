import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prueba1',
  templateUrl: './prueba1.component.html'
})
export class Prueba1ViewComponent implements OnInit {

  constructor(private routeActivated: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.routeActivated.snapshot.data['data']);
  }
}
