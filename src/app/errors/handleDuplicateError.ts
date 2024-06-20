
import { TErrorMessages, TErrorResponse } from '../interface/error';

const handleDuplicateError = (error: any): TErrorResponse => {
  const errorMessages: TErrorMessages = [
    {
      path: '',
      message: error.errorResponse.errmsg,
    },
  ];

  return {
    statusCode: 400,
    message: error.errorResponse.errmsg,
    errorMessages,
  };
};

export default handleDuplicateError;
