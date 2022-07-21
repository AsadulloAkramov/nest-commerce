import { Document } from "mongoose";

import { IProduct } from "./product";
import { IUser } from "./user";

export interface IOrder extends Document {
  owner: IUser,
  totalPrice: number,
  products: IProduct,
  created: Date
}