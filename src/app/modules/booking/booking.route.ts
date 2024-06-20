import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { BookingValidations } from './booking.validation';
import { BookingControllers } from './booking.controller';
import auth from '../../middlewares/auth';

const router = express.Router();

router.post(
  '/',
  auth('user'),
  validateRequest(BookingValidations.createBookingValidationSchema),
  BookingControllers.createBookingIntoDB,
);

router.get('/', auth('admin'), BookingControllers.getAllBookingsFromDB);

const router2 = express.Router();

router2.get('/', auth('user'), BookingControllers.getUserBookingFromDB);

export const BookingRoutes = router;
export const BookingRoutes2 = router2;
