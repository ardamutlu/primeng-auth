export class AuthModel {
  access_token: string;
  expires_date: Date;

  setAuth(auth: AuthModel) {
    this.access_token = auth.access_token;
    this.expires_date = auth.expires_date;
  }
}
