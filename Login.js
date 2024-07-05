document.addEventListener('DOMContentLoaded', function() {
    const studentBtn = document.getElementById('student-btn');
    const tutorBtn = document.getElementById('tutor-btn');

    studentBtn.addEventListener('click', function() {
        studentBtn.classList.add('active');
        tutorBtn.classList.remove('active');
    });

    tutorBtn.addEventListener('click', function() {
        tutorBtn.classList.add('active');
        studentBtn.classList.remove('active');
    });
});
