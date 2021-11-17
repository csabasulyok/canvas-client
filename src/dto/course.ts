export type CourseWorkflowState = 'unpublished' | 'available' | 'completed' | 'deleted';

export type CourseEnrollmentType = 'teacher' | 'student' | 'ta' | 'observer' | 'designer';

export type CourseEnrollmentState = 'active' | 'invited_or_pending' | 'completed';

export type CourseDto = {
  id: number;
  name: string;
  uuid: string;
  is_public: boolean;
  course_code: string;
  is_favorite: boolean;
  enrollments: {
    type: CourseEnrollmentType;
    user_id: number;
    enrollment_state: CourseEnrollmentState;
  }[];
  workflow_state: CourseWorkflowState;
};
