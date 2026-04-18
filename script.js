let form = document.getElementById("form");
let name = document.getElementById("name");
let mobile_number = document.getElementById("mobile_number");
let starting_date = document.getElementById("starting_date");
let feesInput = document.getElementById("fees");
let shift = document.getElementsByName("shift");
let studentList = document.getElementById("student-list");
// let editBtn = newRaw.querySelector("button:first-child");

let editRow = null; //  important

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let nameValue = name.value;
  let mobileNum = mobile_number.value;
  let startingDate = starting_date.value;
  let fees = feesInput.value;

  let selectedShift = "";
  for (let i = 0; i < shift.length; i++) {
    if (shift[i].checked) {
      selectedShift = shift[i].value;
    }
  }

  // अगर edit mode है
  if (editRow) {
    editRow.children[0].textContent = nameValue;
    editRow.children[1].textContent = fees;
    editRow.children[2].textContent = startingDate;

    editRow = null;
    form.reset();
    return;
  }

  // new row create
  let newRaw = document.createElement("div");
  newRaw.classList.add("stddata");

  newRaw.innerHTML = `
  <h5 class="name">${nameValue}</h5>
  <h5 class="Fees">${fees}</h5>
  <h5 class="starting_date">${startingDate}</h5>
  <button class="stdbtn edit-btn">Edit</button>
  <button class="stdbtn delete-btn">Delete</button>
`;

  // Edit button
  let editBtn = newRaw.querySelector(".edit-btn");
  editBtn.addEventListener("click", function () {
      name.value = newRaw.children[0].textContent;
      feesInput.value = newRaw.children[1].textContent;
      starting_date.value = newRaw.children[2].textContent;
      
      editRow = newRaw;
    });
    
    // Delete button
    let deleteBtn = newRaw.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", function () {
    newRaw.remove();
  });

  studentList.appendChild(newRaw);

  form.reset();
});