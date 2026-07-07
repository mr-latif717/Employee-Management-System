const employees = [
  {
    id: "ASE-001",
    name: "Abdul Latif",
    department: "IT",
    designation: "Web Developer",
    status: "Active",
  },

  {
    id: "ASE-002",
    name: "Ahmed Raza",
    department: "HR",
    designation: "HR Officer",
    status: "Active",
  },

  {
    id: "ASE-003",
    name: "Sara Ahmed",
    department: "Finance",
    designation: "Accountant",
    status: "Inactive",
  },

  {
    id: "ASE-004",
    name: "Ayesha Noor",
    department: "Marketing",
    designation: "Marketing Officer",
    status: "Active",
  },

  {
    id: "ASE-005",
    name: "Usman Ali",
    department: "IT",
    designation: "Frontend Developer",
    status: "Active",
  },

  {
    id: "ASE-006",
    name: "Fatima Khan",
    department: "HR",
    designation: "Recruiter",
    status: "Active",
  },

  {
    id: "ASE-007",
    name: "Bilal Ahmad",
    department: "Finance",
    designation: "Finance Manager",
    status: "Inactive",
  },

  {
    id: "ASE-008",
    name: "Hassan Ali",
    department: "Marketing",
    designation: "SEO Specialist",
    status: "Active",
  },

  {
    id: "ASE-009",
    name: "Zain Malik",
    department: "IT",
    designation: "Backend Developer",
    status: "Active",
  },

  {
    id: "ASE-010",
    name: "Maryam Noor",
    department: "HR",
    designation: "Assistant",
    status: "Active",
  },
];

const container = document.getElementById("employeeContainer");
const search = document.getElementById("search");
const filter = document.getElementById("filter");

function displayEmployees(list) {
  container.innerHTML = "";

  list.forEach((emp) => {
    container.innerHTML += `

<div class="employee-card">

<h3>${emp.name}</h3>

<p><strong>ID:</strong> ${emp.id}</p>

<p><strong>Department:</strong> ${emp.department}</p>

<p><strong>Designation:</strong> ${emp.designation}</p>

<p><strong>Status:</strong> ${emp.status}</p>

</div>

`;
  });
}

displayEmployees(employees);

search.addEventListener("keyup", filterEmployees);

filter.addEventListener("change", filterEmployees);

function filterEmployees() {
  let text = search.value.toLowerCase();

  let dept = filter.value;

  let filtered = employees.filter((emp) => {
    let matchName = emp.name.toLowerCase().includes(text);

    let matchDept = dept === "All" || emp.department === dept;

    return matchName && matchDept;
  });

  displayEmployees(filtered);
}
