import { StatusHttpError, StatusHttpSuccess } from './StatusHttp';

type ServiceResponseSuccess<T> = {
  status: StatusHttpSuccess,
  data: T
};

type ServiceResponseError = {
  status: StatusHttpError ;
  data: { message: string }
};

type ServiceResponse<T> = ServiceResponseSuccess<T> | ServiceResponseError;

export default ServiceResponse;