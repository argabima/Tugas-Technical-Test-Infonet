const employees = [
  { "nik":"1", "name":"ABIYYU" },
  { "nik":"2", "name":"ADHIKA" },
  { "nik":"3", "name":"AFRIE" },
  { "nik":"4", "name":"ALAM"}
];

const selected_employees = [
  { "nik": "1", "name": "ABIYYU" },
  { "nik": "2","name":"ADHIKA"}
];

const employee_not_selected = employees.filter(employee => {
  return !selected_employees.some(selected => employee.nik === selected.nik && employee.name === selected.name);
});

console.log(employee_not_selected);
// Output yang diharapkan:
// [
//   { "nik":"3", "name":"AFRIE" },
//   { "nik":"4", "name":"ALAM"}
// ]
