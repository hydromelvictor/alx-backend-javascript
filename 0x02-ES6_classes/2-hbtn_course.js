export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(name) {
    if (typeof name !== 'string') throw new TypeError('Name must be a string');
    this._name = name;
  }

  set length(length) {
    if (typeof length !== 'number') throw new TypeError('Length must be a number');
    this._length = length;
  }

  set students(students) {
    if (!Array.isArray(students)) throw new TypeError('students must be a array');
    for (const student of students) {
      if (typeof student !== 'string') throw new TypeError('students must be a string');
    }
    this._students = students;
  }
}
