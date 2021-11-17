import canvasApi from '../src';

(async () => {
  try {
    // find all courses
    const courses = await canvasApi.courses.get();
    courses.forEach((course) => {
      console.log(course.id, course.name, course.enrollments?.[0]?.type);
    });

    // find course by id
    const courseApi = canvasApi.course(447);
    const course = await courseApi.get();
    console.log(course);

    // find course assignments
    const assignments = await courseApi.assignments().get();
    assignments.forEach((assignment) => {
      console.log(assignment.id, assignment.name, assignment.submission_types);
    });

    // find assignment by id
    const assignmentApi = courseApi.assignment(7246);
    const assignment = await assignmentApi.get();
    console.log(assignment);
  } catch (e) {
    console.log(e.response.status, e.response.data);
  }
})();
