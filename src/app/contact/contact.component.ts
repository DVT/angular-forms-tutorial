import { Component, OnInit } from '@angular/core';
import {Title} from '../models/title';
import {Gender} from '../models/gender';
import {Contact} from '../models/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  titles: Title[];
  genders: Gender[];
  contact: Contact;

  constructor() {
    this.contact = new Contact();
    this.genders = Object.values(Gender) as Gender[];
    this.titles = Object.values(Title) as Title[];
  }

  ngOnInit() {
  }

  selectTitle(title: string) {
    this.contact.title = title as Title;
  }

}
