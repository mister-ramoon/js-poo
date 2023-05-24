class learningPaths {
  constructor({ name, courses = [] }) {
    this.name = name;
    this.courses = courses;
  }
}

const escuelaWeb = new learningPaths({
  name: "Escuela de desarrollo web",
  courses: [
    "Curso definitivo de HTML y CSS",
    "Curso práctico de HTML y CSS",
    "Curso de responsive design",
  ],
});

class Student {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }
}

const ramon2 = new Student({
  name: "ramonruiz",
  username: "ramonruizdev",
  email: "ramonruizdev@gmail.com",
  twitter: "ramonruizdev",
  learningPaths: [escuelaWeb],
});
