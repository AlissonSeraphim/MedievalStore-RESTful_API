import { StatusHttpError } from './StatusHttp';

export type ValidationError = {
  statusHttp: StatusHttpError;
  message: string;
};