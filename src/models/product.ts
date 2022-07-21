import * as mongoose from 'mongoose';

export const productSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },

  title: {
    type: String
  },

  description: {
    type: String
  },

  price: {
    type: Number
  },

  created: {
    type: Date,
    default: Date.now
  }
})