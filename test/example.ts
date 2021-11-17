import canvas from '../src';

(async () => {
  try {
    const courses = await canvas.courses.get();

    courses.forEach((course) => {
      console.log(course.id, course.name, course.enrollments?.[0]?.type);
    });
  } catch (e) {
    console.log(e.response.status, e.response.data);
  }
})();
