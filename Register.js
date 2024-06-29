function showForm(formId) {
    var studentsForm = document.getElementById('students');
    var tutorsForm = document.getElementById('tutors');
    var buttons = document.querySelectorAll('.tab-btn');
    
    buttons.forEach(function(btn) {
        btn.classList.remove('active');
    });

    if (formId === 'students') {
        studentsForm.style.display = 'block';
        tutorsForm.style.display = 'none';
        document.querySelector('.tab-btn[onclick="showForm(\'students\')"]').classList.add('active');
    } else {
        studentsForm.style.display = 'none';
        tutorsForm.style.display = 'block';
        document.querySelector('.tab-btn[onclick="showForm(\'tutors\')"]').classList.add('active');
    }
}
