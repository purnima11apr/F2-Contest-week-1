let arr = [
  { id: 1, name: "john", age: 18, profession: "developer", salary: 1000 },
  { id: 2, name: "jack", age: 20, profession: "developer", salary: 1100 },
  { id: 3, name: "karen", age: 19, profession: "admin", salary: 900 },
];

// 1. Print Developers (`PrintDeveloper` function): Log all developers from the array to the console.
function PrintDeveloper() {
  //Write your code here , just console.log
  const developers = arr.filter((person) => person.profession === "developer");
  console.log(developers);
}

// 2. Add Data (`addData` function): Add a new data object to the array using details collected from a prompt.
function addData() {
  //Write your code here, just console.log
  let id = prompt("Enter ID:");
  id = Number.parseInt(id);
  let name = prompt("Enter Name:");
  let age = prompt("Enter Age:");
  age = Number.parseInt(age);
  let profession = prompt("Enter Profession:");
  let salary = prompt("Enter Salary:");
  salary = Number.parseInt(salary);

  const newData = {
    id: id,
    name: name,
    age: age,
    profession: profession,
    salary: salary,
  };

  arr.push(newData);

  console.log("Data added successfully:");
  console.log(arr);
}

// 3. Remove Admins (`removeAdmin` function): Extract and remove all admins from the array.
function removeAdmin() {
  //Write your code here, just console.log
  arr = arr.filter((person) => person.profession !== "admin");

  console.log(arr);
}

// 4.Concatenate Array (`concatenateArray` function): Combine two arrays (create a dummy array as an example) and log the result
function concatenateArray() {
  //Write your code here, just console.log
  let concatenated = array1.concat(array2);

  console.log(concatenated);
}

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

// 5. Average Age (`averageAge` function): Compute and log the average age of all people in the array.
function averageAge() {
  //Write your code here, just console.log
  let sumOfAge = 0;
  let averageOfAge = 0;

  for (let i = 0; i < arr.length; i++) {
    sumOfAge += arr[i].age;
  }

  averageOfAge = sumOfAge / arr.length;
  console.log(averageOfAge);
}

// 6.Age Check (`checkAgeAbove25` function): Validate if there's at least one person in the array who's older than 25.
function checkAgeAbove25() {
  //Write your code here, just console.log
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].age > 25) {
      console.log(arr[i].name);
      return;
    }
  }
  console.log("No Person with Age greater than 25");
}

// 7. Unique Professions (`uniqueProfessions` function): Log all distinct professions present in the array.
function uniqueProfessions() {
  //Write your code here, just console.log
  const uniqueProfessionsArray = [];

  for (let i = 0; i < arr.length; i++) {
    const profession = arr[i].profession;
    if (!uniqueProfessionsArray.includes(profession)) {
      uniqueProfessionsArray.push(profession);
    }
  }

  console.log(uniqueProfessionsArray);
}

// 8. Sort by Age (`sortByAge` function): Organize the array by age in ascending order.
function sortByAge() {
  //Write your code here, just console.log
  function compare(a, b) {
    return a.age - b.age;
  }
  arr.sort(compare);
  console.log(arr);
}

// 9. Update Profession (`updateJohnsProfession` function): Adjust 'john's profession to 'manager'.
function updateJohnsProfession() {
  //Write your code here, just console.log
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name == "john") {
      arr[i].profession ='manager';
      break;
    }
  }

  console.log(arr);
}

// 10.Profession Count (`getTotalProfessions` function): Calculate and print the total number of developers and admins in the array.
function getTotalProfessions() {
  //Write your code here, just console.log
  const professionCount = {};

  for (let i = 0; i < arr.length; i++) {
    const profession = arr[i].profession;
    if (professionCount[profession]) {
      professionCount[profession]++;
    } else {
      professionCount[profession] = 1;
    }
  }
  console.log(professionCount);
}

// 11. Create a function that shuffles the array in a random order.
function shuffleArray() {
  //Write your code here, just console.log
}

// 12. Create a function that rotates the array to the right by n steps, where n is provided as an argument.
function rotateArray(n) {
  //Write your code here, just console.log
}

// 13. Create a function that finds the person with the closest age to a given number.
function findClosestAge(age) {
  //Write your code here, just console.log
}

// 14. Create a function that checks if there's any repeated name in the array.
function hasRepeatedNames() {
  //Write your code here, just console.log
}
