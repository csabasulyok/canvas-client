export type AssignmentGradingType = 'pass_fail' | 'percent' | 'letter_grade' | 'gpa_scale' | 'points';

export type AssignmentSubmissionType =
  | 'discussion_topic'
  | 'online_quiz'
  | 'on_paper'
  | 'none'
  | 'external_tool'
  | 'online_text_entry'
  | 'online_url'
  | 'online_upload'
  | 'media_recording'
  | 'student_annotation';

export type AssignmentDto = {
  id: number;
  name: string;
  description: string;
  points_possible: number;
  grading_type: AssignmentGradingType;
  assignment_group_id: number;
  submission_types: AssignmentSubmissionType[];
  is_quiz_assignment: boolean;
  html_url: string;
  published: boolean;
  submissions_download_url: string;
};
