export interface Log {
  action: "user.created" | "user.updated";
  timestamp: string;
  id: string;
  payload: any;
  created_at: string;
  updated_at?: string;
  deleted_at?: string;
}