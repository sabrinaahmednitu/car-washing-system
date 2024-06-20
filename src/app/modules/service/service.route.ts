import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ServiceValidations } from './service.validation';
import { ServiceControllers } from './service.controller';
import auth from '../../middlewares/auth';

const router = express.Router();

router.post(
  '/',
  auth('admin'),
  validateRequest(ServiceValidations.createServiceValidationSchema),
  ServiceControllers.createServiceIntoDB,
);
router.get('/:id', ServiceControllers.getSingleServiceFromDB);
router.get('/', ServiceControllers.getAllServicesFromDB);
router.put(
  '/:id',
  auth('admin'),
  validateRequest(ServiceValidations.updateServiceValidationSchema),

  ServiceControllers.updateServiceFromDB,
);
router.delete('/:id', ServiceControllers.deleteServiceFromDB);

export const ServiceRoutes = router;
