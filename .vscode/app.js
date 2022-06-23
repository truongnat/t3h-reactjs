
var courseAPI = 'http://localhost:3000/course';
function start(){
    getCourse(renderCourse);
    handleCreateForm();
}

start();

//function
function getCourse(callback){
    fetch(courseAPI)
        .then(function(course){
            return course.json();
        })
        .then(callback);
}
function createCourse(data,callback){
    var options ={
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    };
    fetch(courseAPI,options)
        .then(function(respone){
            return respone.json();
        })
        .then(callback);
}
function renderCourse(courses){
    var listCoursesBlock = document.querySelector('#list-courses');
    var htmls = courses.map(function(course){
        return `<li class="course-item-${course.id}">
                    <h4>${course.name}</h4>
                    <p>${course.description}</p>
                    <button onclick="deleteCourse(${course.id})">Xoá</button>
                </li>`;
    });
    listCoursesBlock.innerHTML=htmls.join('');
}
function deleteCourse(id){
    var options ={
        method: 'DELETE',
        headers:{
            'Content-Type':'application/json'
        }
    };
    fetch(courseAPI + '/' + id,options)
        .then(function(respone){
            return respone.json();
        })
        .then(function(){
            var courseItem=document.querySelector('.course-item-' + id);
            if(courseItem)
            {
                courseItem.remove();
            }
        });
}
function handleCreateForm(){
    var createBtn=document.querySelector('#create');
    createBtn.onclick=function(){
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;
        var formData = {
            name:name,
            description: description
        };
        createCourse(formData,function(){
            getCourse(renderCourse);
        });
    }
}