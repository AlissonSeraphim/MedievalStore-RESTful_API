type StatusProps = {
  OK: number;
  CREATED: number;
  NO_CONTENT: number;
  INVALID_DATA: number;
  UNAUTHORIZED: number;
  NOT_FOUND: number;
  CONFLICT: number;
  UNPROCESSABLE_ENTITY: number;
  INTERNAL_SERVER_ERROR: number;
};

const httpStatusMap: StatusProps = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  INVALID_DATA: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,
  INTERNAL_SERVER_ERROR: 500,
};

const mapStatusHTTP = (status: keyof StatusProps): number => httpStatusMap[status] || 500;

export default mapStatusHTTP;
