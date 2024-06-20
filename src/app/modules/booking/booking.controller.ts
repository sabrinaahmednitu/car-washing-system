import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status-codes';
import { BookingServices } from './booking.service';

//10. Book a Service (Only Accessible by User)
const createBooking = catchAsync(async (req, res) => {
  const user = req.user;
  const result = await BookingServices.createBooking(req.body, user);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Booking successfull',
    data: result,
  });
});

//11. Get All Bookings (Only Accessible by Admin)
const getAllBookings = catchAsync(async (req, res) => {
  const result = await BookingServices.getAllBookings();
  sendResponse(res, {
    success: result.length ? true : false,
    statusCode: result.length ? httpStatus.OK : httpStatus.NOT_FOUND,
    message: result.length
      ? 'All bookings retrieved successfully'
      : 'No Data Found',
    data: result,
  });
});

//12. Get User's Bookings (Only Accessible by User)
const getUserBooking = catchAsync(async (req, res) => {
  const user = req.user;
  const result = await BookingServices.getUserBooking(user);
  sendResponse(res, {
    success: result.length ? true : false,
    statusCode: result.length ? httpStatus.OK : httpStatus.NOT_FOUND,
    message: result.length
      ? 'User bookings retrieved successfully'
      : 'No Data Found',
    data: result,
  });
});

export const BookingControllers = {
  createBooking,
  getUserBooking,
  getAllBookings,
};
