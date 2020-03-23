import { Component, OnInit } from '@angular/core';
import {Title} from '../models/title';
import {Gender} from '../models/gender';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  titles: Title[];
  genders: Gender[];

  constructor() {
    this.genders = Object.values(Gender) as Gender[];
    this.titles = Object.values(Title) as Title[];
  }

  ngOnInit() {
  }

}
