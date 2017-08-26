import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  goods: Array<any>= [
    {index: 1, name: '红楼梦', spec: '本', price: '100', count: '50'}
    , {index: 3, name: '可口可乐', spec: '瓶', price: '90', count: '60'}
    , {index: 2, name: 'ipad', spec: '台', price: '80', count: '70'}
    , {index: 5, name: 'T shirt', spec: '件', price: '70', count: '80'}
    , {index: 4, name: '茶叶', spec: '斤', price: '70', count: '80'}
  ];

    constructor(meta: Meta, title: Title) {
    title.setTitle('My About Page');

    meta.addTags([ 
      {
        name: 'author', content: 'anasit.com'
      },
      {
        name: 'keywords', content: 'angular 4 tutorial, angular seo'
      },
      {
        name: 'description', content: 'This is my great description.'
      },
    ])
  }

  ngOnInit() {
  }
  sortByUp() {
    this.goods.sort((a, b) => {
      if (a.index > b.index) {
        return 1;
      }
      if (a.index < b.index) {
        return -1;
      }
      return 0;
    });
  }
  sortByDown() {
   this.goods.sort((a, b) => {
      if (a.index < b.index) {
        return 1;
      }
      if (a.index > b.index) {
        return -1;
      }
      return 0;
    });
  }
  sortByRandom() {
    this.goods.sort((a, b) => {
      if (Math.random() > 0.5) {
        return 1;
      }
      if (Math.random() < 0.5) {
        return -1;
      }
      return 0;
    });
  }
}
