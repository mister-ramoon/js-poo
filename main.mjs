function videoPlay(id) {
  const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;
  console.log("Se está reproduciendo desde la url " + urlSecreta);
}

function videoStop(id) {
  const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;
  console.log("Pausamos la url " + urlSecreta);
}

export class PlatziClass {
  constructor({ name, videoID }) {
    this.name = name;
    this.videoID = videoID;
  }

  reproducir() {
    videoPlay(this.videoID);
  }

  pausar() {
    videoStop(this.videoID);
  }
}

class Course {
  constructor({ name, classes = [] }) {
    this._name = name;
    this.classes = classes;
  }

  // changeName(newName) {
  //   this._name = newName;
  // }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (newName === "Curso Malito de Programación Básica") {
      console.error("Web... no");
    } else {
      this._name = newName;
    }
  }
}

const cursoProgBasica = new Course({
  name: "Curso Gratis de Programación Básica",
});

//cursoProgBasica.changeName("Nuevo Curso Gratis de Programación Básica");
cursoProgBasica.name = "Nuevo Curso Gratis de Programación Básica";

const cursoDefinitivoHTML = new Course({
  name: "Curso Definitivo de HTML y CSS",
});

cursoDefinitivoHTML.name = "Curso Malito de Programación Básica";

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
