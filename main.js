class Course {
  constructor({ name, classes = [] }) {
    this.name = name;
    this.classes = classes;
  }
}

const cursoProgBasica = new Course({
  name: "Curso Gratis de Programación Básica",
});

const cursoDefinitivoHTML = new Course({
  name: "Curso Definitivo de HTML y CSS",
});

const cursoPracticoHTML = new Course({
  name: "Curso Practico de HTML y CSS",
});

class LearingPath {
  constructor({ name, courses = [] }) {
    this.name = name;
    this.courses = courses;
  }
}

const escuelaWeb = new LearingPath({
  name: "Escuela de desarrollo web",
  courses: [cursoProgBasica, cursoDefinitivoHTML, cursoPracticoHTML],
});

const escuelaData = new LearingPath({
  name: "Escuela de Data Science",
  courses: [
    cursoProgBasica,
    "Curso Básico de Bases de Datos",
    "Curso de Terminal para Bases de Datos",
    "Curso de Python",
  ],
});

const escuelaVgs = new LearingPath({
  name: "Escuela de Video Juegos",
  courses: [
    cursoProgBasica,
    "Curso de Introducción a Video Juegos",
    "Curso de Unreal Engine",
    "Curso de Unity 3D",
  ],
});
