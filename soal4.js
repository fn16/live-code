var grades1 = [
  { name: 'John', score: 80, classCode: 'A' },
  { name: 'Mike', score: 60, classCode: 'B' },
  { name: 'Budi', score: 70, classCode: 'C' },
  { name: 'Siti', score: 50, classCode: 'A' },
  { name: 'Aaron', score: 10, classCode: 'A' },
  { name: 'Arthur', score: 10, classCode: 'C' },
  { name: 'Osass', score: 10, classCode: 'B' },
  { name: 'Yolo', score: 90, classCode: 'C' },
];

function getReport(grades) {
  // only code below
  var classReports = [
    { classCode: 'A', passed: [], failed: [] },
    { classCode: 'B', passed: [], failed: [] },
    { classCode: 'C', passed: [], failed: [] },
  ];

  for(var i = 0; i < classReports.length; i++) {
    for(var j = 0; j < grades.length; j++) {
      var grade = grades[j];
      if(grade.classCode === classReports[i].classCode) { 
        if(grade.score >=70 ){
          classReports[i].passed.push(grade.name)
        }else{
          classReports[i].failed.push(grade.name)
        }
      }
    }
  }

  return classReports;
}

console.log(getReport(grades1));