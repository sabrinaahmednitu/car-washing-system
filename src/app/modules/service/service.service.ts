import httpStatus from 'http-status-codes';
import AppError from '../../errors/AppError';
import { TService } from './service.interface';
import { Service } from './service.model';

//3. Create Service (Only Accessible by Admin)
const createService = async (payload: TService) => {
  const result = Service.create(payload);
  return result;
};

//4. Get single Service
const getSingleService = async (id: string) => {
  const result = Service.findById(id);
  return result;
};

//5. Get All Services
const getAllService = async () => {
  const result = await Service.find();
  return result;
};

//6. Update Services (Only Accessible by Admin)
const updateService = async (id: string, payload: Partial<TService>) => {
  const service = await Service.findById(id);
  if (!service) {
    throw new AppError(httpStatus.NOT_FOUND, 'Service Not Found by this id');
  }

  const result = await Service.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

//7. Delete a Service (Only Accessible by Admin)
const deleteService = async (id: string) => {
  const result = await Service.findByIdAndUpdate(
    id,
    {
      isDeleted: true,
    },
    { new: true },
  );
  return result;
};

export const ServiceServices = {
  createService,
  getSingleService,
  getAllService,
  updateService,
  deleteService,
};
