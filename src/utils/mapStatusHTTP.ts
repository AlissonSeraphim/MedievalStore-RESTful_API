type StatusProps = {
  OK: number;
  CREATED: number;
  NO_CONTENT: number;
  BAD_REQUEST: number;
  UNAUTHORIZED: number;
  NOT_FOUND: number;
  CONFLICT: number;
  INVALID_VALUE: number;
  INTERNAL_SERVER_ERROR: number;
};

const httpStatusMap: StatusProps = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INVALID_VALUE: 422,
  INTERNAL_SERVER_ERROR: 500,
};

const mapStatusHTTP = (status: keyof StatusProps): number => httpStatusMap[status] || 500;

export default mapStatusHTTP;
