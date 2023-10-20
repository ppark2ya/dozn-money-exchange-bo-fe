import { BaseError, NOT_FOUND_ERROR_CODE } from './base-error';

export class NotFoundError extends BaseError {
  constructor(message: string = NOT_FOUND_ERROR_CODE) {
    super(message);
    this.code = NOT_FOUND_ERROR_CODE;
    this.status = 404;
  }
}
