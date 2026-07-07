document
  .getElementById("employeeForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    let empId = document.getElementById("empid").value.trim();
    let fullName = document.getElementById("fullname").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let department = document.getElementById("department").value;
    let designation = document.getElementById("designation").value.trim();
    let joining = document.getElementById("joining").value;
    let salary = document.getElementById("salary").value;

    let gender = document.querySelector('input[name="gender"]:checked');

    // Check all fields
    if (
      empId === "" ||
      fullName === "" ||
      email === "" ||
      phone === "" ||
      department === "" ||
      designation === "" ||
      joining === "" ||
      salary === "" ||
      !gender
    ) {
      alert("All fields are required.");
      return;
    }

    // Employee ID
    if (!empId.startsWith("ASE-")) {
      alert("Employee ID must start with ASE-");
      return;
    }

    // Email Validation
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.match(emailPattern)) {
      alert("Please enter a valid email.");
      return;
    }

    // Phone Validation
    let phonePattern = /^[0-9]{11}$/;

    if (!phone.match(phonePattern)) {
      alert("Phone number must be exactly 11 digits.");
      return;
    }

    // Salary Validation
    if (salary < 0) {
      alert("Salary cannot be negative.");
      return;
    }

    // Joining Date Validation
    let today = new Date().toISOString().split("T")[0];

    if (joining > today) {
      alert("Joining date cannot be in the future.");
      return;
    }

    alert("Employee Registered Successfully!");

    document.getElementById("employeeForm").reset();
  });
