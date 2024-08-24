import { HttpException, HttpStatusCode } from "./root";

export class BadRequestException extends HttpException {
  constructor(message: string, errorCode: HttpStatusCode) {
    super(message, errorCode, 400, null);
  }
}