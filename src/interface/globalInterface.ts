export type IError = {
  success: false;
  errorMessages: [];
  stack?: unknown;
};

export type TApiResponse<T> = {
  message: string;
  statusCode?: number;
} & (
  | {
      success: true;
      data: T;
      meta?: {
        page?: number;
        limit?: number;
        total?: number;
      };
    }
  | IError
);
export type TLoginResponse = {
  message: string;
  statusCode?: number;
} & (
  | {
      success: true;
      token: string;
    }
  | IError
);
