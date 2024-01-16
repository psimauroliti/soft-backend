export interface User {
  id: string;
  created_at: string;
  updated_at?: string;
  deleted_at?: string;
  gender: "male" | "female" | "non-binary";
  first_name: string;
  last_name: string;
  email: string;
  profile_photo: string;
  birthdate: string;
}