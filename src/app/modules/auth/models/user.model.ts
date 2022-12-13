import { AuthModel } from './auth.model';

export class UserModel extends AuthModel {
  id: number;
  username: string;
  password: string;
  email: string;
  fullname: string;
  firstname: string;
  lastname: string;

  setUser(_user: any) {
    this.id = _user.id;
    this.username = _user.username;
    this.password = _user.password;
    this.email = _user.email;
    this.fullname = _user.fullname;
    this.firstname = _user.firstname;
    this.lastname = _user.lastname;
  }
}
