import {Title} from './title';
import {Gender} from './gender';

export class Contact {
  name: string;
  firstName: string;
  middleName: string;
  lastName: string;
  gender: Gender;
  birthDate: Date;
  title: Title;
  phoneNumber: string;
  email: string;
}
