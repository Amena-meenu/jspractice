var start=prompt("Would u like to start Web Application:y/n?")
var students=[];
function addStudent()
{
  var name=prompt("what name would u like to add?");
  students.push(name);
}
function displayStudents()
{
  console.log(students);
}
function removeStudent()
{
  var deletename=prompt("what name would you like to delete?");
  var index=students.indexOf(deletename);
  students.splice(index,1)
}
if(start==="y")
{
  while(request!=="quit")
  {
    var request=prompt("please select an action:add,remove,display,quit");
    if(request==="add")
    {
      addStudent();
    }
    else if(request==="display")
    {
      displayStudents();
    }
    else if (request==="remove")
    {
      removeStudent();
    }
  }
}
alert("Thanks for using Web Application Please refresh to start again!!")
