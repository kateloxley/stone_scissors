// "камень" > "ножницы"
// "камень" < "бумага"
// "ножницы" > "бумага"
// "бумага" = "бумага"
// "ножницы" = "ножницы"
// "камень" = "камень"

function handleUserInput(a) {
    knbArray = ["камень", "ножницы", "бумага"]
    const b = knbArray[Math.floor(Math.random() * knbArray.length)]    
    document.getElementById("show_app_input").value = b;
    let c;
    if (a === "камень" && b === "ножницы" || a === "ножницы" && b === "бумага") {
        c = "Ты победил";
    }
    else if (a === b) {
        c = "Ничья, давай еще раз";
    }
    else {
        c = "Ты проиграл";
    }  
    document.getElementById("show_result").innerHTML = c;
    }


document.querySelectorAll(".get_user_input").forEach(function(n) {
    n.addEventListener('click', function() {
        const a = n.innerHTML.toLowerCase()
        handleUserInput(a);
    });
    });