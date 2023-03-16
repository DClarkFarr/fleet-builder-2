export class ApiError extends Error {
  status: number;
  message: string;
  constructor(message = "An error occurred", status = 500) {
    super(message);
    this.status = status;
    this.message = message;
  }
}
