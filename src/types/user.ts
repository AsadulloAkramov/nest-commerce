import { Document } from 'mongoose';

export interface IAddress {
  addr1: string,
  addr2: string,
  city: string,
  country: string,
  zipCode: number
}

export interface IUser extends Document {
  username: string,
  readonly password: string,
  seller: boolean,
  address: IAddress,
  created: Date
}