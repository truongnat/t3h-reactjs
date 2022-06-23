var callAPI = 'http://localhost:3000/course';
fetch(callAPI)
    .then(function(course){
        return course.json();
    })
    .then(function(data){
        console.log(data);
    })