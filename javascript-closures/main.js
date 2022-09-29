function graduate(credential) {
  return function (fullname) {
    return `${fullname}, ${credential}`;
  };
}
const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');

medicalSchool('Dan Abramov');
lawSchool('Ryan Florence');

const doctor = medicalSchool('Dan Abramov');
const attorney = lawSchool('Ryan Florence');

console.log(doctor);
console.log(attorney);
