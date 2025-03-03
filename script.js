const colors = ["#feffe9", "#ffd6e9", "#d1dff6", "#f7efd2", "#fff4f1"];
let index = 0;
document.getElementById("theme").addEventListener("click", function () {
  document.body.style.backgroundColor = colors[index];
  index = (index + 1) % colors.length;
});

const btns = document.getElementsByClassName("btn");
const head = document.getElementById("head");
const task = document.getElementById("task");
const secondary = document.getElementById("secondary");
const rmv = document.getElementById("rmv");
const nextpage = document.getElementById('nextpage');
for (const btn of btns) {
  btn.addEventListener("click", function () {
    console.log(btn);
    btn.disabled = true;
    btn.classList.add(
      "bg-gray-400",
      "cursor-not-allowed",
      "opacity-50",
      "pointer-events-none"
    );
    head.innerText = parseInt(head.innerText) + 1;
    task.innerText = parseInt(task.innerText) - 1;
    const done_task = btn.parentNode.parentNode.children[1].innerText;

    function getTime() {
      const date = new Date();
      let h = date.getHours();
      let m = date.getMinutes();
      const ampm = h >= 12 ? "PM" : "AM";
      h = h % 12;
      h = h ? h : 12; // the hour '0' should be '12'
      m = m < 10 ? "0" + m : m;
      return `${h}:${m} ${ampm}`;
    }

    const p = document.createElement("p");
    p.innerText = `You have completed the task- ${done_task} at ${getTime()}.`;
    secondary.appendChild(p);
  });
}

rmv.addEventListener("click", function () {
  secondary.innerHTML = " ";
});

nextpage.addEventListener('click', function(){
  window.location.href = 'blog.html' ;
})