import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'default-button',
  templateUrl: './default-button.component.html',
  styleUrls: ['./default-button.component.css']
})
export class DefaultButtonComponent implements OnInit {

  @Input()
  type: 'submit' | 'button' = 'submit';
  @Input()
  text:string = 'Submit';
  @Input()
  bgColor = 'white';
  @Input()
  color = 'black';
  @Input()
  fontSizeRem = 1.5;
  @Input()
  widthRem = 18;
  @Output()
  onClick = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
