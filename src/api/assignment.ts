import * as dto from '../dto';
import CanvasApiBase from './base';

/**
 * /courses/:courseId/assignments/:assignmentId API
 */
export class AssignmentApi extends CanvasApiBase {
  protected courseId: number;
  protected assignmentId: number;

  constructor(courseId: number, assignmentId: number) {
    super(`/courses/${courseId}/assignments/${assignmentId}`);
    this.courseId = courseId;
    this.assignmentId = assignmentId;
  }

  async get(): Promise<dto.AssignmentDto> {
    const response = await this.axios.get<dto.AssignmentDto>('');
    return response.data;
  }

  delete(): Promise<void> {
    return this.axios.delete('');
  }
}

/**
 * /courses/:courseId/assignments API
 */
export class AssignmentsApi extends CanvasApiBase {
  protected courseId: number;

  constructor(courseId: number) {
    super(`/courses/${courseId}/assignments`);
    this.courseId = courseId;
  }

  byId(assignmentId: number): AssignmentApi {
    return new AssignmentApi(this.courseId, assignmentId);
  }

  async get(): Promise<dto.AssignmentDto[]> {
    const response = await this.axios.get<dto.AssignmentDto[]>('');
    return response.data;
  }
}
