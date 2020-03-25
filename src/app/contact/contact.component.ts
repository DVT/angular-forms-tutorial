import {Component, OnInit} from '@angular/core';
import {Title} from '../models/title';
import {Gender} from '../models/gender';
import {Contact} from '../models/contact';
import {NgModel} from '@angular/forms';

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
    this.contact = {
      firstName: 'John',
      lastName: 'Doe',
      name: 'John Doe',
      gender: Gender.Male,
      phoneNumber: '+27829403800',
      email: 'jdoe@gmail.com'
    } as Contact;
  }

  displayContact() {
    alert(JSON.stringify(this.contact));
  }

}
