import CanvasApiBase from './api/base';
import * as api from './api';

/**
 * Fetcher class around invoking Canvas LMS API calls
 */
export class CanvasApi extends CanvasApiBase {
  courses: api.CoursesApi = new api.CoursesApi();

  course(courseId: number): api.CourseApi {
    return this.courses.byId(courseId);
  }
}

/**
 * Default instance
 */
const canvasApi = new CanvasApi();
export default canvasApi;
