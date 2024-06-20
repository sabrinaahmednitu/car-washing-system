import httpStatus from 'http-status-codes';
import { JwtPayload } from 'jsonwebtoken';
import { TBookingForReq } from './booking.interface';
import { Booking } from './booking.model';
import { User } from '../User/user.model';
import AppError from '../../errors/AppError';
import { Service } from '../service/service.model';
import { Slot } from '../slot/slot.model';


//10. Book a Service (Only Accessible by User)
const createBooking = async (payload: TBookingForReq, user: JwtPayload) => {
  const userData = await User.findOne({ email: user?.email, role: user?.role });
  if (!userData) {
    throw new AppError(httpStatus.NOT_FOUND, 'Customer does not exists');
  }

  const serviceData = await Service.findById(payload?.serviceId);

  if (!serviceData) {
    throw new AppError(httpStatus.NOT_FOUND, 'Service does not exists');
  }
  const slotData = await Slot.findOne({
    _id: payload?.slotId,
    service: payload?.serviceId,
  });

  if (!slotData) {
    throw new AppError(httpStatus.NOT_FOUND, 'Slot does not exists');
  }
  if (slotData?.isBooked === 'booked') {
    throw new AppError(httpStatus.BAD_REQUEST, 'This slot is already booked');
  }
  await Slot.findByIdAndUpdate(payload?.slotId, {
    isBooked: 'booked',
  });

  const booking = await Booking.create({
    customer: userData?._id,
    service: payload?.serviceId,
    slot: payload?.slotId,
    vehicleType: payload?.vehicleType,
    vehicleBrand: payload?.vehicleBrand,
    vehicleModel: payload?.vehicleModel,
    manufacturingYear: payload?.manufacturingYear,
    registrationPlate: payload?.registrationPlate,
  });

  const result = await Booking.findById(booking?._id)
    .populate('customer')
    .populate('service')
    .populate('slot');
  return result;
};

//11. Get All Bookings (Only Accessible by Admin)
const getAllBookings = async () => {
  const result = await Booking.find()
    .populate('customer')
    .populate('service')
    .populate('slot');
  return result;
};

//12. Get User's Bookings (Only Accessible by User)
const getUserBooking = async (user: JwtPayload) => {
  const userData = await User.findOne({ email: user?.email, role: user?.role });

  const result = Booking.find({ customer: userData?._id });
  return result;
};

export const BookingServices = {
  createBooking,
  getUserBooking,
  getAllBookings,
};
