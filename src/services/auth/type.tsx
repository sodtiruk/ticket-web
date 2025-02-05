
export interface BaseResponse<T> {
  message: string;
  statusCode: number;
  data?: T;
}

export interface RegisteredResponse {
  id: number;
  username: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
}