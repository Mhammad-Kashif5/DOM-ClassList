/* Task 1: Add a Class */

let para = document.getElementById("para")
let addBtn = document.getElementById("btn1")
let removeBtn = document.querySelector("#btn2")
addBtn.addEventListener("click", () => {
    para.classList.add("highlight")
})

/* Task 2: Remove a Class */
removeBtn.addEventListener("click", () => {
    para.classList.remove("highlight")
})

/* Task 3: Toggle a Class */
let toggle = document.getElementById("toggle")
let togglePara = document.querySelector(".para")
toggle.addEventListener("click", () => {
    togglePara.classList.toggle("toggle")
})

/* Task 4: Check Class Exists */
let checkBtn = document.querySelector("#check")
let checkPara = document.querySelector(".check")
checkBtn.addEventListener("click", () => {
    if (checkPara.classList.contains("check")) {
        alert("yes para is exist")
    } else {
        alert("Para is not exist")
    }
})

/* Task 5: Button Active State (Real World) */
let activeBtn = document.getElementById("active")
activeBtn.addEventListener("click", () => {
    activeBtn.removeAttribute("disabled")
    activeBtn.classList.toggle("active-btn")
})

/* Task 6: Dark Mode (Industry Example) */
let mode = document.querySelector("#mode")
mode.addEventListener("click", () => {
    document.body.classList.toggle("mode")
})
