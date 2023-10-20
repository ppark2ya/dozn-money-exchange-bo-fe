import { BaseError, UNKNOWN_ERROR_CODE } from './base-error';

export class UnknownError extends BaseError {
  constructor(message: string = UNKNOWN_ERROR_CODE) {
    super(message);
    this.code = UNKNOWN_ERROR_CODE;
    this.status = 500;
  }
}
