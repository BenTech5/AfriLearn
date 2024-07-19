function tutorDetails(){
    const tutorElement = document.querySelector('.Gracie-Amarie').innerHTML = 'see details';
    console.log(tutorElement);
    if(tutorElement === 'see details'){
        document.querySelector('.details').innerHTML = `Grace Amarie is an expert in Data Analysis with an experience of five years in working and teaching`
    }
    else if(tutorElement === ''){
        document.querySelector('.details').innerHTML = '';
    }
}