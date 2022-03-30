import jwt from "jsonwebtoken";

export interface InfoUser {
  email: string;
  name: string;
  lastname: string;
  birthDate: string;
  password: string;
  isAdm: boolean;
}

export interface InfoLogin {
  email: string;
  password: string;
}

export interface InfoProduct {
  id: string;
  name: string;
  price: number;
}

export interface InfoCart {
  total: number;
  user: InfoUser;
}

declare module "jsonwebtoken" {
  export interface UserId extends jwt.JwtPayload {
    userId: string;
    isAdm: boolean;
  }
}
