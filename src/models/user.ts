import { Schema} from 'mongoose'

export const userSchema = new Schema({
  
  username: {
    type: String
  },

  password: {
    type: String
  },
  
  seller: {
    type: Boolean,
    default: false
  },
  
  address: {
    addr1: String,
    addr2: String,
    city: String,
    country: String,
    zipCode: Number
  },

  created: {
    type: Date,
    default: Date.now
  }
})