studentTrackr.controller('FileCtrl', function FileCtrl($scope, $http, StudentsFactory) {
  debugger;
  $http.get('students.json')
       .then(function(res){
          StudentsFactory.students.push(res.data);                
        });
});