export const NOT_FOUND_ERROR_CODE = 'NOT_FOUND_ERROR';
export const UNAUTHORIZED_ERROR_CODE = 'UNAUTHORIZED_ERROR';
export const UNKNOWN_ERROR_CODE = 'UNKNOWN_ERROR';

export class BaseError extends Error {
  protected code?: string;
  protected status?: number;

  constructor(message?: string) {
    super(message);
    this.name = this.constructor.name;
  }

  public get getCode() {
    return this.code;
  }

  public get getStatus() {
    return this.status;
  }
}
