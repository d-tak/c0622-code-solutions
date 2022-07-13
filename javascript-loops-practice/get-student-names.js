/* exported getStudentNames */

function getStudentNames(students) {
  var studentNames = [];
  for (var i = 0; i < students.length; i++) {
    var onlyName = students[i].name;
    studentNames.push(onlyName);
  }
  return studentNames;
}
