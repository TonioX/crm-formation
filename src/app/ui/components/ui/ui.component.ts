import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class UiComponent implements OnInit {

  public open = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.open = !this.open;
  }

}
