import express from 'express';
import { AuthRoutes } from '../modules/auth/auth.route';
import {
  BookingRoutes,
  BookingRoutes2,
} from '../modules/booking/booking.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/bookings',
    route: BookingRoutes,
  },
  {
    path: '/my-bookings',
    route: BookingRoutes2,
  },
];

moduleRoutes.forEach((item) => router.use(item.path, item.route));

export default router;
