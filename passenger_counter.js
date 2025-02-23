increment = document.getElementById("increment");
save = document.getElementById("save");
num = document.getElementById("num");
entry = document.getElementById("entry");
doneBtn = document.getElementById("done");
totalPara = document.getElementById("totalPara");

count = 0;
total = 0;

function updateCount() {
    num.textContent = count;
}

function updateEntry() {
    entry.textContent += count;
}

increment.addEventListener("click", function() {
    entry.style.display = "block";
    count++;
    total++;
    updateCount();
    console.log(total);
    totalPara.style.display = "none";
})

save.addEventListener("click", function() {
    if (count > 0){
        entry.textContent += count + " - ";
    }
    count = 0;
    updateCount()
})

doneBtn.addEventListener("click", function() {
    totalPara.style.display = "block";
    totalPara.textContent = "Total: " + total;
    num.textContent = 0; 
    count = 0;
    total = 0;
    entry.style.display = "none";
    entry.textContent = "Entries: ";
})

