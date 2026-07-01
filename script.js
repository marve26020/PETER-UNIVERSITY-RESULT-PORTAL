const results = {
  2024654: "./NURSING SCIENCE/2022/2022.html",

  // "2024655": "swe200.html",
  // "2024656": "swe200.html",
  // "2024780": "swe200.html"
};
const form = document.getElementById("resultForm");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent page refresh

  const regNo = document.getElementById("regNo").value.trim();

  if (results[regNo]) {
    window.location.href = results[regNo];
  } else {
    alert("Registration number not found.");
  }
});
