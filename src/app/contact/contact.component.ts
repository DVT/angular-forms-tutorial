import {Component, OnInit} from '@angular/core';
import {Title} from '../models/title';
import {Gender} from '../models/gender';
import {Contact} from '../models/contact';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {PhoneNumberValidationFactory} from '../forms/validators/PhoneNumberValidationFactory';
import {combineLatest} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  titles: Title[];
  genders: Gender[];
  contact: Contact;

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      title: new FormControl('', { updateOn: 'change' }),
      firstName: new FormControl('', { validators: [ Validators.required ]}),
      middleName: new FormControl(''),
      lastName: new FormControl('', { validators: [ Validators.required ]}),
      gender: new FormControl('', { updateOn: 'blur' }),
      phoneNumber: new FormControl('', { validators: [ PhoneNumberValidationFactory.localPhoneNumber ] }),
      email: new FormControl('', { validators: [ Validators.email ] })
    });

    this.genders = [null, ...Object.values(Gender) ] as Gender[];
    this.titles = [null, ...Object.values(Title) ] as Title[];

    this.contact = {
      firstName: 'John',
      lastName: 'Doe',
      name: 'John Doe',
      gender: Gender.Male,
      title: Title.Mr,
      phoneNumber: '+27829403800',
      email: 'jdoe@gmail.com'
    } as Contact;
  }

  get title(): AbstractControl { return this.form.get('title'); }
  get firstName(): AbstractControl { return this.form.get('firstName'); }
  get middleName(): AbstractControl { return this.form.get('middleName'); }
  get lastName(): AbstractControl { return this.form.get('lastName'); }
  get gender(): AbstractControl { return this.form.get('gender'); }
  get phoneNumber(): AbstractControl { return this.form.get('phoneNumber'); }
  get email(): AbstractControl { return this.form.get('email'); }

  ngOnInit() {

    this.title.valueChanges
      .subscribe(x => this.contact.title = x);

    this.firstName.valueChanges
      .subscribe(x => this.contact.firstName = x);

    this.middleName.valueChanges
      .subscribe(x => this.contact.middleName = x);

    this.lastName.valueChanges
      .subscribe(x => this.contact.lastName = x);

    combineLatest(
      this.firstName.valueChanges.pipe(startWith(this.contact.firstName)),
      this.middleName.valueChanges.pipe(startWith(this.contact.middleName)),
      this.lastName.valueChanges.pipe(startWith(this.contact.lastName)),
    )
      .pipe(map(x => ({ firstName: x[0] || '', middleName: x[1] || '', lastName: x[2] || '' })))
      .subscribe(names => {
        this.contact.name = `${names.firstName} ${names.middleName} ${names.lastName}`;
    });

    this.gender.valueChanges
      .subscribe(x => this.contact.gender = x);

    this.phoneNumber.valueChanges
      .subscribe(x => this.contact.phoneNumber = x);

    this.email.valueChanges
      .subscribe(x => this.contact.email = x);
  }

  displayContact() {
    alert(JSON.stringify(this.contact));
  }

}
