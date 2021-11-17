import * as dto from '../dto';
import { AssignmentApi, AssignmentsApi } from './assignment';
import CanvasApiBase from './base';

/**
 * /courses/:courseId API
 */
export class CourseApi extends CanvasApiBase {
  protected courseId: number;

  constructor(courseId: number) {
    super(`/courses/${courseId}`);
    this.courseId = courseId;
  }

  /**
   * Direct
   */

  async get(): Promise<dto.CourseDto> {
    const response = await this.axios.get<dto.CourseDto>('');
    return response.data;
  }

  async exists(): Promise<boolean> {
    try {
      await this.axios.head('');
      return true;
    } catch (error) {
      if (error?.response?.status === 404) {
        return false;
      }
      throw error;
    }
  }

  /**
   * Sub
   */

  assignments(): AssignmentsApi {
    return new AssignmentsApi(this.courseId);
  }

  assignment(assignmentId: number): AssignmentApi {
    return new AssignmentApi(this.courseId, assignmentId);
  }
}

/**
 * /courses API
 */
export class CoursesApi extends CanvasApiBase {
  constructor() {
    super('/courses');
  }

  async get(): Promise<dto.CourseDto[]> {
    const response = await this.axios.get<dto.CourseDto[]>('');
    return response.data;
  }

  byId(courseId: number): CourseApi {
    return new CourseApi(courseId);
  }
}
