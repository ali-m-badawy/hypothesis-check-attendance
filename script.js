
let students = [];

// تحميل البيانات من ملف JSON
fetch('students.json')
  .then(response => response.json())
  .then(data => {
    students = data;
  })
  .catch(error => {
    document.getElementById('result').innerHTML = 'فشل تحميل البيانات';
  });

function searchStudent() {
  const inputId = document.getElementById('studentId').value.trim();
  const resultBox = document.getElementById('result');

  if (inputId === '') {
    resultBox.innerHTML = 'يرجى إدخال كود الطالب';
    return;
  }

  const student = students.find(s => s.id.toString() === inputId);

  if (student) {
    resultBox.innerHTML = `
      <p><strong>الاسم:</strong> ${student.name}</p>
      <p><strong>عدد مرات الحضور:</strong> ${student.absences}/6 </p>
    `;
  } else {
    resultBox.innerHTML = 'هذا الكود غير مسجل';
  }
}
