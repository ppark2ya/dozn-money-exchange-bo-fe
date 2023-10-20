import { BaseError, UNAUTHORIZED_ERROR_CODE } from './base-error';

export class UnauthorizedError extends BaseError {
  constructor(message: string = UNAUTHORIZED_ERROR_CODE) {
    super(message);
    this.code = UNAUTHORIZED_ERROR_CODE;
    this.status = 401;
  }
}
