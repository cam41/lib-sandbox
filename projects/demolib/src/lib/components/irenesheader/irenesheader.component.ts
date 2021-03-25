import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-irenesheader',
  templateUrl: './irenesheader.component.html',
  styleUrls: ['./irenesheader.component.css']
})
export class IrenesheaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() textToChange: string;

}
