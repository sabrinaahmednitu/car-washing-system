import { model, Schema } from 'mongoose';
import { USER_ROLE } from './user.constant';
import { TUser } from './user.interface';
const userSchema = new Schema<TUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: 0,
    },
    phone: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: Object.keys(USER_ROLE),
    },
    address: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);


export const User = model<TUser>('User', userSchema);
