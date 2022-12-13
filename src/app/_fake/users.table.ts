export class UsersTable {
  public static users: any = [
    {
      id: 1,
      username: 'john_doe',
      password: 'Password1!',
      email: 'user@company.com',
      access_token: '8f3ae836da744329a6f93bf20594b5cc',
      fullname: 'John Doe',
      firstname: 'John',
      lastname: 'Doe',
    },
  ];

  public static tokens: any = [
    {
      id: 1,
      access_token: Math.random(),
    },
  ];
}
