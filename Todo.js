let inputs = document.getElementById("inp");
let text = document.querySelector("#taskList");

function Add() {
    if (inputs.value == "") {
        alert("Please enter a Task");
    } else {
        let newEle = document.createElement("li");
        newEle.innerHTML = `${inputs.value} <i class="fa-solid fa-trash"></i>`;
        text.appendChild(newEle);
        inputs.value = ""; // Clear the input field after adding the task
        
        // Add event listener for the delete icon
        newEle.querySelector("i").addEventListener("click", function() {
            newEle.remove();
        });
    }
}
