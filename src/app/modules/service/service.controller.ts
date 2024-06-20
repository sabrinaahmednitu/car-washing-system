import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status-codes';
import { ServiceServices } from './service.service';

//3. Create Service (Only Accessible by Admin)
const createService = catchAsync(async (req, res) => {
  const result = await ServiceServices.createService(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Service created successfully',
    data: result,
  });
});

//4. Get single Service
const getSingleService = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ServiceServices.getSingleService(id);
  sendResponse(res, {
    success: result ? true : false,
    statusCode: result ? httpStatus.OK : httpStatus.NOT_FOUND,
    message: result ? 'Service retrieved successfully' : 'No Data Found',
    data: result,
  });
});

//5. Get All Services
const getAllServices = catchAsync(async (req, res) => {
  const result = await ServiceServices.getAllService();
  sendResponse(res, {
    success: result.length ? true : false,
    statusCode: result.length ? httpStatus.OK : httpStatus.NOT_FOUND,
    message: result.length
      ? 'Services retrieved successfully'
      : 'No Data Found',
    data: result,
  });
});

//6. Update Services (Only Accessible by Admin)
const updateService = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ServiceServices.updateService(id, req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Service updated successfully!',
    data: result,
  });
});

//7. Delete a Service (Only Accessible by Admin)
const deleteService = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ServiceServices.deleteService(id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Service deleted successfully!',
    data: result,
  });
});

export const ServiceControllers = {
  createService,
  getSingleService,
  getAllServices,
  updateService,
  deleteService,
};
