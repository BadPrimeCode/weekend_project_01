// to do:
// create calculated annual salary total
// display annual salary total with results on DOM
// subtract fired employee salary from total
// style that shit
// -------------------------------

// // For your weekend challenge, you will need to create an application that
// records employees along with their salary. We also want to add the salaries up
// so we know how much we’re spending each month.
console.log('script.js sourced');

var employees=[];
var salaries = [];

// The application should first have an input form that collects the following:
//
// Employee First Name
// Employee Last Name
// ID Number
// Job Title
// Annual Salary


var addEmployee = function(){
  console.log('in addEmployee function');
  var newEmployee = {
    firstName: document.getElementById('firstNameIn').value,
    lastName: document.getElementById('lastNameIn').value,
    numId: document.getElementById('numIdIn').value,
    jobTitle: document.getElementById('jobTitleIn').value,
    annualSalary: document.getElementById('annualSalaryIn').value
  }; // end newEmployee
  // alert user if necessary fields are left blank
  if(newEmployee.firstName == '' || newEmployee.lastName == '' || newEmployee.numId == '' || newEmployee.jobTitle == '' || newEmployee.annualSalary == ''){
    alert('Please input all the required information.');
  } // end missing inputs
  else{
    // continue if needed fields are filled in
    clearInputs();
    // push employee into array
    employees.push(newEmployee);
    salaries.push(parseInt(newEmployee.annualSalary));
    // display employees
    displayEmployees();
    displaySalaries();
  } // end all needed inputs filled in
} // end addEmployee

var clearInputs = function(){
  console.log( 'in clearInputs' );
  document.getElementById('firstNameIn').value='';
  document.getElementById('lastNameIn').value='';
  document.getElementById('numIdIn').value='';
  document.getElementById('jobTitleIn').value='';
  document.getElementById('annualSalaryIn').value='';
} // end clearInputs

var displayEmployees = function(){
  console.log('in displayEmployees');
  console.log(employees);
  // empty our div element
  document.getElementById('allEmployees').innerHTML='';
  // for each employee, add a list item with first name, last name, ID number, job title, annual salary
  for (var i = 0; i < employees.length; i++){
    // employee information (first name, last name, ID number, job title, annual salary)
    var employeeInfo = '<p>' + 'Name: ' + employees[i].firstName + ' ' + employees[i].lastName + '<br>';
    // atom freaked out so I had to break the variable up
    employeeInfo += 'Employee ID Number: #' + employees[i].numId + '<br>' + ' Job Title: ' + employees[i].jobTitle + '<br>' + ' Annual Salary: $' + employees[i].annualSalary + '<br>' + '<button onClick="youreFired(' + i + ')">Fire Me!</button></p>';
    // append employee info to output div
    document.getElementById('allEmployees').innerHTML += employeeInfo;
  } // end employee display for loop
} // end displayEmployees

var displaySalaries = function() {
  console.log('in displaySalaries');
  console.log(salaries);
  var totalSalaries = 0;
  for (var i = 0; i < salaries.length; i++){
    totalSalaries += salaries[i];
  }
  document.getElementById('allSalaries').innerHTML += '<p>' + totalSalaries + '</p>';
}

var youreFired = function(index) {
    console.log('firing ' + employees[index].firstName + ' ' + employees[index].lastName);
    // splice the employee at this index from array
    // ARRAY.splice( INDEX, NUMBERTOREMOVE)
    employees.splice(index, 1);
    salaries.splice(index, 1);
    // show employees
    displayEmployees();
}; // end youreFired

// A 'Submit' button should clear out the inputs and your logic should store that
// information. Then, that information should be appended to the DOM so the user of
// the application can see the information they just entered.
//
// Finally, your logic should calculate all of the employee salaries and report
// back the Monthly cost of salaries.
