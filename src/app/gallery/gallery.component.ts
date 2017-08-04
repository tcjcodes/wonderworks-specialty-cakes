import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  public imageCols = [];
  public images = [
    'cake1.jpg',
    'cake2.jpg',
    'cake3.jpg',
    'cake4.jpg',
    'cake5.jpg',
    'cake6.jpg',
    'cake7.jpg',
    'cake8.jpg',
    'birthday1.jpg',
    'birthday2.jpg',
    'birthday3.jpg',
  ];
  constructor() {

  }

  ngOnInit() {
  }

}
