export type StatusHttpSuccess = 'CREATED' | 'SUCCESSFUL';

export type StatusHttpError = 'INVALID_DATA' | 'UNAUTHORIZED' | 'UNPROCESSABLE_ENTITY';

type StatusHttp = StatusHttpSuccess | StatusHttpError;

export default StatusHttp;