export enum UseRequestStatus {
  NOTHING,
  LOADING,
  ERROR,
  SUCCESS,
}

export type UseRequestState = {
  status: UseRequestStatus;
  message?: string;
  statusCode?: number;
}