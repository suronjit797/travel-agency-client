export interface ILoginBody {
  email: string;
  password: string;
}
export interface ILoginResponse {
  success: string;
  statusCode: number;
  message: string;
  token: string;
}

export interface IUser {
  id?: string;
  name: string;
  email: string;
  address: string;
  phoneNumber: string;
  role: string;
  createdAt?: string;
  updatedAt?: string;
}
