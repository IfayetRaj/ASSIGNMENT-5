const colors = ["#feffe9", "#ffd6e9", "#d1dff6", "#f7efd2", "#fff4f1"];
let index = 0;
document.getElementById("theme").addEventListener("click", function () {
  document.body.style.backgroundColor = colors[index];
  index = (index + 1) % colors.length;
});
