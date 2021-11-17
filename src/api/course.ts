import * as dto from '../dto';
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
