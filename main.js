class Comment {
  constructor({ content, studentName, studentRole = "estudiante" }) {
    this.content = content;
    this.studentName = studentName;
    this.studentRole = studentRole;
    this.likes = 0;
  }

  publicar() {
    console.log(this.studentName + " (" + this.studentRole + ")");
    console.log(this.likes + " likes");
    console.log(this.content);
  }
}

function videoPlay(id) {
  const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;
  console.log("Se está reproduciendo desde la url " + urlSecreta);
}

function videoStop(id) {
  const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;
  console.log("Pausamos la url " + urlSecreta);
}

class PlatziClass {
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

class Course {
  constructor({ name, classes = [], isFree = false, lang = "spanish" }) {
    this.name = name;
    this.classes = classes;
    this.isFree = isFree;
    this.lang = lang;
  }

  get name() {
    return this._name;
  }

  set name(nuevoNombrecito) {
    if (typeof nuevoNombrecito === "string") {
      let nameCapitalized = nuevoNombrecito.split(" ");

      for (let i = 0; i < nameCapitalized.length; i++) {
        nameCapitalized[i] =
          nameCapitalized[i][0].toUpperCase() + nameCapitalized[i].substr(1);
      }

      this._name = nameCapitalized.join(" ");
    } else {
      console.log("Tu nombre debe ser una cadena de texto");
    }
  }
}

const cursoProBasicaName = "curso gratis de programación básica";
const cursoProgBasica = new Course({
  name: cursoProBasicaName,
  lang: "spanish",
  isFree: true,
});

const cursoDefinitivoHTML = new Course({
  name: "Curso Definitivo de HTML y CSS",
  lang: "spanish",
  isFree: false,
});

const englishCourse = new Course({
  name: "English Course",
  lang: "english",
  isFree: false,
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

  publicarComentario(commentContent) {
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
    });
  }
}

class FreeStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    if (newCourse.isFree) {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn(
        "Lo sentimos, " + this.name + ", solo puedes tomar cursos abiertos"
      );
    }
  }
}

class BasicStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    if (newCourse.lang !== "english") {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn(
        "Lo sentimos, " + this.name + ", no puedes tomar cursos en inglés"
      );
    }
  }
}

class ExpertStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  }
}

class TeacherStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  }

  publicarComentario(commentContent) {
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
      studentRole: "Profesor",
    });
  }
}

const juan = new FreeStudent({
  name: "JuanDC",
  username: "juandc",
  email: "juan@platzi.com",
  twitter: "fjuandc",
  learningPaths: [escuelaWeb, escuelaVgs],
});

const miguelito = new BasicStudent({
  name: "Miguelito",
  username: "migelitofeliz",
  email: "mighuel@platzi.com",
  instagram: "migelito_feliz",
  learningPaths: [escuelaWeb, escuelaData],
  approvedCourses: [cursoProgBasica],
});

const freddy = new TeacherStudent({
  name: "Freddy Vega",
  username: "freddier",
  email: "f@gep.com",
  instagram: "freddiervega",
});
