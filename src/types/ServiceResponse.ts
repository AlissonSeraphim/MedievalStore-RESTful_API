export type ServiceResponseCreated<T> = {
  status: 'CREATED' | 'OK' | 'UNPROCESSABLE_ENTITY',
  data: T,
};
