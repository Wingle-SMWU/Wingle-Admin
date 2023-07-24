export interface ReturnResp<T> {
  data: T;
  message: string;
  status: string;
}

export interface AdminUserResp {
  userId: number;
  email: string;
  gender: boolean;
  createdTime: string;
  name: string;
  nickname: string;
  nation: string;
  idCardImage?: string;
  schoolName: string;
  departmentName: string;
  studentNumber: string;
  permission: string;
  updateTime: string;
  updatedTime: string;
  memo?: string | null;
  reason?: string | null;
}

export interface DataResp {
  list: AdminUserResp[];
  totalPages: number;
}
