export type ServiceResponseCreated<T> = {
  status: 'CREATED' | 'OK',
  data: T,
};
