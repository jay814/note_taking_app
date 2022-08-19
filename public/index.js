console.log("hello");
document.getElementById("add").addEventListener('click',function (){
    var newSubject = document.createElement('div');
    newSubject.setAttribute('class','subject');
    newSubject.setAttribute('onclick','z()');

    var newSubjectThumbnail = document.createElement('div');
    newSubjectThumbnail.setAttribute('class','subject_thumbnail');
    var newSubjectTitle = document.createElement('div');
    var paragaph = document.createElement
    ('p');
    paragaph.innerText = "Untitled";
    paragaph.setAttribute('class','subject_title');
    newSubjectTitle.appendChild(paragaph);
    newSubject.appendChild(newSubjectThumbnail);
    newSubject.appendChild(newSubjectTitle);
    var whole = document.getElementById('subjects')
    whole.appendChild(newSubject);
})

function z(){
    console.log("hello");
}