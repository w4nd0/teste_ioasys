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

export interface InfoAbsenceTime {
  date: Date;
  quantity: number;
  medical: boolean;
  user: InfoUser;
}

export interface InfoCompensatoryTime {
  date: Date;
  quantity: number;
  authorized: boolean;
  withdrawn: boolean;
  user: InfoUser;
}

export interface TokenPayload {
  userId: string;
  isAdm: boolean;
}
