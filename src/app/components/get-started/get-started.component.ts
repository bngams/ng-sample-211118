import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss']
})
export class GetStartedComponent implements OnInit {
  name: string = 'Boris';
  today: Date = new Date();
  imgUrl: string = 'https://via.placeholder.com/150';
  logoColor: string = 'blue';
  isDisabled: boolean = true;
  fruits: string[] = ['orange', 'banana', 'lemon'];

  constructor() { }

  ngOnInit(): void {
  }

  clickMe(event: unknown): void {
    console.log('Bouton cliqué', event);
  }

  toggleState(): void {
    this.isDisabled = !this.isDisabled;
  }

}
