document.addEventListener('DOMContentLoaded', () => {
    const studentsButton = document.getElementById('studentsButton');
    const tutorsButton = document.getElementById('tutorsButton');
    const studentsForm = document.getElementById('studentsForm');
    const tutorsForm = document.getElementById('tutorsForm');

    studentsButton.addEventListener('click', () => {
        studentsButton.classList.add('active');
        tutorsButton.classList.remove('active');
        studentsForm.classList.add('active');
        tutorsForm.classList.remove('active');
    });

    tutorsButton.addEventListener('click', () => {
        tutorsButton.classList.add('active');
        studentsButton.classList.remove('active');
        tutorsForm.classList.add('active');
        studentsForm.classList.remove('active');
    });
});
