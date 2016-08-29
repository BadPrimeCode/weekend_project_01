console.log('script.js sourced');

var employees=[];
var salaries = [];

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
    // push salary into number array
    salaries.push(parseInt(newEmployee.annualSalary));
    // display employees
    displayEmployees();
    // display salaries
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
  // empty employee div element
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
  // empty salary div element
  document.getElementById('allSalaries').innerHTML='';
  // for each employee, add salary to monthly total
  var totalSalaries = 0;
  for (var i = 0; i < salaries.length; i++){
    totalSalaries += salaries[i];
  }
  // display annual salary total divided by 12, to two decimal points because cents
  document.getElementById('allSalaries').innerHTML += '<p>' + 'Monthly Cost of Salaries: $' + (totalSalaries/12).toFixed(2);
}

var youreFired = function(index) {
  // oh no! this employee is fired!
    console.log('firing ' + employees[index].firstName + ' ' + employees[index].lastName);
    // splice the employee at this index from array
    employees.splice(index, 1);
      // splice the salary at this index from array
    salaries.splice(index, 1);
    // show new list of employees
    displayEmployees();
    // show new salary total
    displaySalaries();
}; // end youreFired
