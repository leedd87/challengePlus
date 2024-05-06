export interface IToken {
  id: number;
  access_token: string;
  refresh_token: string;
  datetime_expiration: string;
  created_at: string;
  updated_at: string;
}

export interface IUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  timezone: string;
  locale: string;
  created_at: string;
  updated_at: string;
}
