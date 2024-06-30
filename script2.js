const notesContainer = document.querySelector(".notesContainer");
const cbtn = document.querySelector(".btn");

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes99") || '';
}
showNotes();

function updateStorage() {
    localStorage.setItem("notes99", notesContainer.innerHTML);
}

cbtn.addEventListener("click", () => {
    let inputbox = document.createElement("div");
    let img = document.createElement("img");
    img.src = "images/delete.png";
    inputbox.className = "inputbox";
    inputbox.setAttribute("contenteditable", "true");
    notesContainer.appendChild(inputbox).appendChild(img);
  
});

notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
});

// Event delegation for handling keyup events on .inputbox elements
notesContainer.addEventListener("keyup", function (e) {
    if (e.target.classList.contains("inputbox")) {
        updateStorage();
    }
});
document.addEventListener("keydown",event=>{
    if(event.key === "Enter"){
        document.execCommand("insertlinebreak");
        event.preventDefault();
    }
})
