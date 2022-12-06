import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent implements OnInit {
  @Input() img: string = 'hello';
  @Output() loaded = new EventEmitter<string>();
  imgEmpy: string = 'assets/images/empty.jpeg';

  constructor() {}

  ngOnInit(): void {}

  errorImg() {
    this.img = this.imgEmpy;
  }

  loadedImg() {
    console.log('loaded child');
    this.loaded.emit(this.imgEmpy);
  }
}
