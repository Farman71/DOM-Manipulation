
let decreBtn = document.getElementById("dec-btn");
let increBtn = document.getElementById("inc-btn"); 
let clearBtn = document.getElementById("clear-btn"); 
let counterLbl = document.getElementById("counter"); 
let errorDiv = document.getElementById("error-msg");

increBtn.addEventListener("click", incCount);
decreBtn.addEventListener("click", decCount);
clearBtn.addEventListener("click", clearCount);

function incCount(event) {
    event.preventDefault();
    let newCount = parseInt(counterLbl.textContent);
    counterLbl.textContent = newCount + 1;

    if (newCount >= 0) {
        clearBtn.style.display = "inline-block";
        errorDiv.style.display = "none"; 
    }
}

function decCount(event) {
    event.preventDefault();
    let newCount = parseInt(counterLbl.textContent);

    if (newCount > 0) {
        counterLbl.textContent = newCount - 1;
    }

    if (parseInt(counterLbl.textContent) === 0) {
        errorDiv.style.display = "block";
    }
}

function clearCount(event) {
    event.preventDefault();
    counterLbl.textContent = 0;
    errorDiv.style.display = "none"; 
    clearBtn.style.display = "none";
}
