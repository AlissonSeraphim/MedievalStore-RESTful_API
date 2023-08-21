export type StatusHttpSuccess = 'CREATED' | 'OK';

export type StatusHttpError = 'INVALID_DATA' | 'UNAUTHORIZED' | 'UNPROCESSABLE_ENTITY';

type StatusHttp = StatusHttpSuccess | StatusHttpError;

export default StatusHttp;