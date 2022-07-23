export interface authData {
  isLoggedIn: boolean;
  token: string;
  icon: string;
  company_id: string;
  user_id: string;
}

export interface userData{
  
}

export interface taskData{
  assigned_user: string,
      task_date: string,
      task_time: number,
      is_completed: number,
      time_zone: number,
      task_msg: string,
      inbox_type: string,
      task_date_time_in_utc: string,
      inbox_display_date: string,
      est_closed: string,
      task_date_time_in_utc_string: string,
      task_date_time_offset: number,
      type_3: string,
      lead_id: string,
      modified_by: string,
      modified: string,
      status: number,
      is_delete: number,
      is_archived: number,
      is_shared: number,
      created: string,
      company_id: string,
      user_id: string,
      id: string,
}