document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const forms = document.querySelector("form")
  forms.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(e.target)
    newTask(e.target["new-task-description"]["value"])
    forms.reset()
  })
});
function newTask(task) {
  const p = document.createElement("p")
  let btn = document.createElement("button")
  btn.addEventListener("click", deleteTask)
  btn.textContent = "x"
  p.textContent = `${task} `
  p.appendChild(btn)
  console.log(p)
  document.querySelector('#tasks').appendChild(p)
}

function deleteTask(e) {
  e.target.parentNode.remove()
}

