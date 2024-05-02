function FtoC (event) {
    event.preventDefault();
    let input = document.getElementById('input');
    let answer = ( 5/9 * (input.value - 32) )
    let result = document.getElementById('result');
    result.innerText = answer;
    if (isNaN(input.value)) {
        result.innerText = 'Please Enter A Number.'
    }
}

function CtoF (event) {
    event.preventDefault();
    let input = document.getElementById('input');
    let answer = ( (input.value * 9/5) + 32)
    let result = document.getElementById('result');
    result.innerText = answer;
}

function handleClear (event) {
    event.preventDefault();
    document.getElementById('input').value = ''
    document.getElementById('result').innerText = ''
}

window.addEventListener("load", (event) => {
    let CToFBtn = document.getElementById('ctof');
    let FToCBtn = document.getElementById('ftoc');
    let clearBtn = document.getElementById('clear');
    
    if (CToFBtn) {
        CToFBtn.addEventListener("click", CtoF)
    }

    if (FToCBtn) {
        FToCBtn.addEventListener("click", FtoC)
    }

    if (clearBtn) {
        clearBtn.addEventListener("click", handleClear)
    }
})