interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
}
  
const student1: Student = {
  firstName: "Hydromel",
  lastName: "Victor",
  age: 27,
  location: "paris"
};
  
const student2: Student = {
  firstName: "Angel",
  lastName: "Grunisly",
  age: 69,
  location: "paris"
};
  
let StudentsList: Array<Student> = [student1, student2];
const body: HTMLBodyElement = document.getElementsByTagName("body");
const table: HTMLTableElement = document.createElement("table");
const thead: HTMLTableSectionElement = document.createElement("thead");
const headrow0: HTMLTableRowElement = thead.insertRow(0);
const cellhead0: HTMLTableCellElement = headrow0.insertCell(0);
cellhead0.innerHTML = "firstName";
const headrow1: HTMLTableRowElement = thead.insertRow(1);
const cellhead1: HTMLTableCellElement = headrow1.insertCell(1);
cellhead1.innerHTML = "location";
table.appendChild(thead);

const tbody: HTMLTableSectionElement = document.createElement("tbody");
StudentsList.forEach((student) => {
  const bodyrow: HTMLTableRowElement = tbody.insertRow(0);
  const bodycell0: HTMLTableCellElement = bodyrow.insertCell(0);
  const bodycell1: HTMLTableCellElement = bodyrow.insertCell(1);
  bodycell0.innerHTML = student.firstName;
  bodycell1.innerHTML = student.location;
});
table.appendChild(tbody);
body.appendChild(table);
  