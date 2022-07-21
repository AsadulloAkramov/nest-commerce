import { Document } from "mongoose";

import { IProduct } from "./product";
import { IUser } from "./user";

interface IProductOrder {
  product: IProduct,
  quantity: number
}
export interface IOrder extends Document {
  owner: IUser,
  totalPrice: number,
  products: IProductOrder[],
  created: Date
}