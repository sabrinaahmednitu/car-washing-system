import { z } from 'zod';
import { vehicleTypes } from './booking.constant';

const createBookingValidationSchema = z.object({
  body: z.object({
    serviceId: z.string(),
    slotId: z.string(),
    vehicleType: z.enum(vehicleTypes),
    vehicleBrand: z.string({ required_error: 'Vehicle mrand is required' }),
    vehicleModel: z.string({ required_error: 'Vehicle model is required' }),
    manufacturingYear: z
      .number()
      .int()
      .positive()
      .nonnegative('Manufacturing year must be a positive integer'),
    registrationPlate: z.string({
      required_error: 'Registration Plate is required',
    }),
  }),
});

export const BookingValidations = {
  createBookingValidationSchema,
};
