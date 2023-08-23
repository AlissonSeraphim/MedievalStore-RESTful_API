export type StatusHttpSuccess = 'CREATED' | 'OK';

export type StatusHttpError = 'INVALID_DATA' | 'UNAUTHORIZED' | 
'UNPROCESSABLE_ENTITY' | 'NOT_FOUND';

type StatusHttp = StatusHttpSuccess | StatusHttpError;

export default StatusHttp;